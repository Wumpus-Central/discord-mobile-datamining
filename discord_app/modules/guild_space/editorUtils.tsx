// === Module 19537: editorUtils ===

// Module 19537 (editorUtils)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6433 */;
import guildSpaceWidgetLayout from "guildSpaceWidgetLayout" /* 19538 */;
import GuildSpaceTypes from "GuildSpaceTypes" /* 19539 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function createDraftWidget(type, name, locked) {
  const obj = { id: null, position: { column: guildSpaceWidgetLayout.LEFT_COLUMN, order: 0 }, requires_hydration: false, default_title: name, locked };
  closure_4 = tmp + 1;
  obj.id = "" + c3 + +closure_4;
  if (GuildSpaceTypes.GuildSpaceWidgetType.IMAGE_TEXT === type) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.type = type;
    const obj4 = { type, title: null, image_hash: null, text: null };
    obj3.config = obj4;
    return obj3;
  } else {
    const obj5 = {};
    const merged1 = Object.assign(obj);
    obj5.type = type;
    const obj6 = { type };
    obj5.config = obj6;
    return obj5;
  }
  const obj2 = { column: guildSpaceWidgetLayout.LEFT_COLUMN, order: 0 };
}
let c3 = "draft:";
let closure_4 = 0;
let items = [fn(19539).GuildSpaceWidgetType.POPULAR_MUSIC, fn(19539).GuildSpaceWidgetType.LEADERBOARD];
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/editorUtils.tsx");

export { createDraftWidget };
export function createDefaultDraftWidgets(arg0) {
  closure_0 = arg0;
  return items.flatMap((item, order) => {
    closure_0 = item;
    const found = closure_0.find((type) => type.type === closure_0);
    if (null == found) {
      items = [];
    } else {
      const obj = {};
      const merged = Object.assign(createDraftWidget(item, found.name, found.locked));
      const obj2 = { column: guildSpaceWidgetLayout.LEFT_COLUMN, order };
      obj.position = obj2;
      items = [obj];
    }
    return items;
  });
}
export function isDraftWidgetId(widget_id) {
  return widget_id.startsWith(c3);
}
export function filterCatalogWidgetsAtMaxInstances(arr, arg1) {
  const map = new Map();
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let num = map.get(nextResult.type);
    if (num == null) {
      num = 0;
    }
    let result = map.set(nextResult.type, num + 1);
    continue;
  }
  return arr.filter((type) => {
    let num = map.get(type.type);
    if (num == null) {
      num = 0;
    }
    return num < type.max_instances;
  });
}
export function toWidgetConfigUpdateRequest(type) {
  if (type.type === GuildSpaceTypes.GuildSpaceWidgetType.IMAGE_TEXT) {
    const obj = { type: null, text: null, title: null };
    ({ type: obj.type, text: obj.text, title: obj.title } = type);
    if (undefined !== type.image) {
      obj.image = type.image;
    }
    return obj;
  } else {
    return type;
  }
}
export function getWidgetSaveError(arg0, arg1) {
  if (arg0 instanceof HTTPUtils.HTTPResponseError) {
    const obj = { status: null, body: null };
    ({ status: obj.status, body: obj.body } = arg0);
    const aPIError = new V6OrEarlierAPIError.APIError(obj);
    const _Object = Object;
    const entries = Object.entries(aPIError.getAllFieldErrors());
    const obj3 = entries[Symbol.iterator]();
    while (obj3 !== undefined) {
      let tmp15 = _slicedToArray(tmp12, 2);
      [str3, tmp16] = tmp15;
      let tmp17 = _slicedToArray(str3.split("."), 2);
      let tmp18 = tmp17[1];
      if ("widgets" === tmp17[0]) {
        let _Number = Number;
        let NumberResult = Number(tmp18);
        let _Number2 = Number;
        let tmp21 = NumberResult;
        let tmp22;
        if (Number.isInteger(NumberResult)) {
          tmp22 = arg1[tmp21];
        }
        let first = tmp16[0];
        let tmp24 = tmp22;
        if (first != null) {
          let message = first.message;
        }
        if (null != tmp24) {
          if (null != tmp27) {
            let obj2 = { type: tmp22.type, message };
            obj3.return();
            return obj2;
          }
        }
      }
      continue;
    }
  }
}