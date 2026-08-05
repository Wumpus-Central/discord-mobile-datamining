// _runtime/05680_getHeaderTitle.js
arg5.default = function getHeaderTitle(headerTitle) {
  if (typeof headerTitle.headerTitle === "string") {
    let title = headerTitle.headerTitle;
  } else {
    title = arg1;
    if (undefined !== headerTitle.title) {
      title = headerTitle.title;
    }
  }
  return title;
};