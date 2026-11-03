// _runtime/01722_installShareableHostUnpacker.js
const items = [
  {
    code: "(function installShareableHostUnpacker_Pnpm_shareableHostUnpackerNativeTs1(){function shareableHostUnpacker(initial,hostDecorator){let hostShareable={isHost:true,__shareableRef:true,value:initial};if(hostDecorator){hostShareable=hostDecorator(hostShareable);}const shareable=hostShareable;return shareable;}globalThis.__shareableHostUnpacker=shareableHostUnpacker;})",
  },
];
[tmp2] = items;
function installShareableHostUnpacker() {
  globalThis.__shareableHostUnpacker = function shareableHostUnpacker(value, fn) {
    const obj = { isHost: true, __shareableRef: true, value };
    let tmp = obj;
    if (fn) {
      tmp = fn(obj);
    }
    return tmp;
  };
}
installShareableHostUnpacker.__workletHash = 6370281244802;
installShareableHostUnpacker.__initData = tmp2;

export { installShareableHostUnpacker };
