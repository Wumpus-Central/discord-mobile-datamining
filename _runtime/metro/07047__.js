// === Module 7047: ? ===

// Module 7047

export function getLabel(label, arg1) {
  if (undefined !== label.label) {
    let title = label.label;
  } else {
    title = arg1;
    if (undefined !== label.title) {
      title = label.title;
    }
  }
  return title;
}