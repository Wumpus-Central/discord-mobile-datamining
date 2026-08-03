// === Module 5222: getHeaderTitle ===

// Module 5222 (getHeaderTitle)
arg5.default = function getHeaderTitle(headerTitle) {
  if (typeof headerTitle.headerTitle === "y") {
    let title = headerTitle.headerTitle;
  } else {
    title = arg1;
    if (undefined !== headerTitle.title) {
      title = headerTitle.title;
    }
  }
  return title;
};