// === Module 19042: guildSpaceWidgetLayout ===

// Module 19042 (guildSpaceWidgetLayout)
import size from "module_2" /* 2 */;

function byOrder(position, position2) {
  return position.position.order - position2.position.order;
}
const result = size.fileFinishedImporting("modules/guild_space/guildSpaceWidgetLayout.tsx");

export const LEFT_COLUMN = 0;
export const RIGHT_COLUMN = 1;
export const splitWidgetsByColumn = function splitWidgetsByColumn(arr) {
  const found = arr.filter((position) => 1 !== position.position.column);
  const items = [found.sort(byOrder), ];
  const found1 = arr.filter((position) => 1 === position.position.column);
  items[1] = found1.sort(byOrder);
  return items;
};
export const renumberWidgets = function renumberWidgets(arr) {
  const found = arr.filter((position) => 1 !== position.position.column);
  const items = [found.sort(byOrder), ];
  const found1 = arr.filter((position) => 1 === position.position.column);
  items[1] = found1.sort(byOrder);
  return items.flatMap((arr, index) => {
    closure_0 = index;
    return arr.map((position, order) => {
      if (position.position.column !== closure_0) {
        const obj = {};
        const merged = Object.assign(position);
        const obj2 = { column: tmp, order };
        obj.position = obj2;
        let tmp2 = obj;
      } else {
        tmp2 = position;
      }
      return tmp2;
    });
  });
};
export const addWidget = function addWidget(arr, arg1, column) {
  const found = arr.filter((position) => 1 !== position.position.column);
  const items = [found.sort(byOrder), ];
  const found1 = arr.filter((position) => 1 === position.position.column);
  items[1] = found1.sort(byOrder);
  column = undefined;
  if (column != null) {
    column = column.column;
  }
  let num = 0;
  if (1 === column) {
    num = 1;
  }
  let index;
  if (column != null) {
    index = column.index;
  }
  if (index == null) {
    index = arr2.length;
  }
  items[num].splice(Math.max(0, Math.min(index, items[num].length)), 0, arg1);
  return items.flatMap((arr, index) => {
    closure_0 = index;
    return arr.map((position, order) => {
      if (position.position.column !== closure_0) {
        const obj = {};
        const merged = Object.assign(position);
        const obj2 = { column: tmp, order };
        obj.position = obj2;
        let tmp2 = obj;
      } else {
        tmp2 = position;
      }
      return tmp2;
    });
  });
};
export const getFullColumnIndex = function getFullColumnIndex(arr, arr2, arg2, arg3) {
  closure_0 = arg3;
  let found = arr;
  if (null != arg3) {
    found = arr.filter((id) => id.id !== closure_0);
  }
  let found1 = arr2;
  if (null != arg3) {
    found1 = arr2.filter((id) => id.id !== closure_0);
  }
  const id = tmp2;
  if (null == found1[arg2]) {
    return found.length;
  } else {
    let length = found.findIndex((id) => id.id === id.id);
    if (-1 === length) {
      length = found.length;
    }
    return length;
  }
};
export const moveWidget = function moveWidget(arr, arg1, arg2, arg3) {
  closure_0 = arg1;
  const found = arr.find((id) => id.id === closure_0);
  if (null == found) {
    return null;
  } else {
    const found1 = arr.filter((position) => 1 !== position.position.column);
    const items = [found1.sort(byOrder), ];
    const found2 = arr.filter((position) => 1 === position.position.column);
    items[1] = found2.sort(byOrder);
    const first = items[0];
    const items1 = [first.filter((id) => id.id !== closure_0), items[1].filter((id) => id.id !== closure_0)];
    let num = 0;
    if (1 === arg2) {
      num = 1;
    }
    const _Math = Math;
    const _Math2 = Math;
    items1[num].splice(Math.max(0, Math.min(arg3, items1[num].length)), 0, found);
    return items1.flatMap((arr, index) => {
      closure_0 = index;
      return arr.map((position, order) => {
        if (position.position.column !== closure_0) {
          const obj = {};
          const merged = Object.assign(position);
          const obj2 = { column: tmp, order };
          obj.position = obj2;
          let tmp2 = obj;
        } else {
          tmp2 = position;
        }
        return tmp2;
      });
    });
  }
};