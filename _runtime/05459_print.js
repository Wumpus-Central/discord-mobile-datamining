// _runtime/05459_print.js
function print() {

}
const frozen = Object.freeze(print);
arg5.print = print;
arg5.enableLogging = (arg0) => {
  console.warn("[BottomSheet] could not enable logging on production!");
};