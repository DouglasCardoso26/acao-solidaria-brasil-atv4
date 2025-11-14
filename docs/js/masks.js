// Máscaras simples sem dependências
function maskCPF(value){
  return value
    .replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
    .slice(0,14);
}

function maskTelefone(value){
  const v = value.replace(/\D/g,'');
  const ddd = v.slice(0,2);
  const p1 = v.length>10 ? v.slice(2,7) : v.slice(2,6);
  const p2 = v.length>10 ? v.slice(7,11) : v.slice(6,10);
  let out = '';
  if(ddd){ out += '('+ddd+') '; }
  if(p1){ out += p1; }
  if(p2){ out += '-'+p2; }
  return out.slice(0,15);
}

function maskCEP(value){
  return value
    .replace(/\D/g,'')
    .replace(/(\d{5})(\d)/,'$1-$2')
    .slice(0,9);
}

function attachMask(id, fn){
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener('input', e => {
    const start = el.selectionStart;
    const before = el.value;
    el.value = fn(el.value);
    // tentativa simples de preservar caret ao digitar
    const delta = el.value.length - before.length;
    el.setSelectionRange(start + (delta>0?1:0), start + (delta>0?1:0));
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  attachMask('cpf', maskCPF);
  attachMask('telefone', maskTelefone);
  attachMask('cep', maskCEP);
});
