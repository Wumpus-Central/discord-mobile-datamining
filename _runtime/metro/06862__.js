// _runtime/metro/06862__.js

export default function _nonIterableRest() {
  const typeError = new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
  throw typeError;
}
