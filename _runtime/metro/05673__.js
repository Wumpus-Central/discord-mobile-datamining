// === Module 5673: ? ===

// Module 5673

export const getLabel = function getLabel(label, arg1) {
  if (undefined !== label.label) {
    let title = label.label;
  } else {
    title = arg1;
    if (undefined !== label.title) {
      title = label.title;
    }
  }
  return title;
};