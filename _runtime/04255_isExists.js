// === Module 4255: isExists ===

// Module 4255 (isExists)

export default function isExists(arg0, arg1, arg2) {
  if (arguments.length < 3) {
    const _TypeError = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("3 argument required, but only " + arguments.length + " present");
    throw typeError;
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(arg0, arg1, arg2);
    const tmp9 = date.getFullYear() === arg0 && date.getMonth() === arg1 && date.getDate() === arg2;
    return tmp9;
  }
};