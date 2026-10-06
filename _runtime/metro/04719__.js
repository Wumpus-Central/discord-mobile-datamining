// _runtime/metro/04719__.js
const fn =
  Array.isArray ||
  ((arg0) => {
    return "[object Array]" == toString.call(arg0);
  });

export default fn;
