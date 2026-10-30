// _runtime/metro/12802__.js

export default function createCustomError(name, message) {
  closure_0 = name;
  closure_1 = message;
  const obj2 = Object.create(SyntaxError.prototype);
  const error = new Error();
  obj2.name = name;
  obj2.message = message;
  Object.defineProperty(obj2, "stack", {
    get() {
      return error.stack || "".replace(/^(.+\n){1,3}/, closure_0 + ": " + closure_1 + "\n");
    },
  });
  return obj2;
}
