// _runtime/00791_arrayPush.js

export default function arrayPush(arg0, arg1) {
  for (let num = 0; num < length; num = num + 1) {
    arg0[arg0.length + num] = arg1[num];
  }
  return arg0;
}
