// === Module 5492: getHeaderTitle ===

// Module 5492 (getHeaderTitle)
arg5.getHeaderTitle = function getHeaderTitle(options, name) {
  if (typeof options.headerTitle === "string") {
    let title = options.headerTitle;
  } else {
    title = name;
    if (undefined !== options.title) {
      title = options.title;
    }
  }
  return title;
};