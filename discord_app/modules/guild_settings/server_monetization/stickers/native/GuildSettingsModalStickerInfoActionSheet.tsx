// === Module 17802: GuildSettingsModalStickerInfoActionSheet ===

// Module 17802 (GuildSettingsModalStickerInfoActionSheet)
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal" /* 17795 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StickersStore from "StickersStore" /* 5694 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, closure_2;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
const memoResult = react.memo(function GuildSettingsModalStickerInfoActionSheet(arg0) {
  let TableRowGroup;
  let _undefined;
  let c4;
  let guildId;
  let hideActionSheet;
  let intl;
  let intl2;
  let obj15;
  let obj4;
  let obj5;
  let obj6;
  let stickerId;
  let tmp5;
  let tmp8Result;
  ({ guildId: require, stickerId: importDefault, hideActionSheet } = arg0);
  _slicedToArray = undefined;
  let obj = function _onDeleteSticker() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let intl;
      let obj3;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != stateFromStores) {
              _undefined(true);
              c3 = 2;
              v2 = 3;
              c4 = 1;
              const obj5 = { value: obj3.deleteGuildSticker(tmp31), done: false };
              obj3 = tmp(closure_2[7]);
              return obj5;
            }
          } else if (1 === v2) {
            c3 = 0;
            closure_128_4(false);
            throw closure_2;
          } else {
            if (2 === v2) {
              c3 = 1;
              const obj6 = { key: "IMAGE_PICKER_ERROR", IconComponent: tmp(closure_2[9]).CircleErrorIcon, content: intl.string(tmp(closure_2[10]).t["5NMPSS"]) };
              const open = v2(closure_2[8]).open;
              const tmp15 = v2(closure_2[8]);
              intl = tmp(closure_2[10]).intl;
              open(obj6);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_4(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_2();
              c3 = 1;
            }
            c3 = 0;
            closure_128_4(false);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp36) {
          closure_2 = tmp36;
          if (0 === c3) {
            c4 = 3;
            throw tmp36;
          } else if (1 === tmp38) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = require("get initialized");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stickersByGuildId = StickersStore.getStickersByGuildId(require);
    let found;
    if (stickersByGuildId != null) {
      found = stickersByGuildId.find((id) => id.id === stickerId);
    }
    return found;
  });
  [tmp5, c4] = _slicedToArray(obj.useState(false), 2);
  const items1 = [hideActionSheet, stateFromStores];
  const tmp4 = _slicedToArray(obj.useState(false), 2);
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items1);
  let tmp8Result2 = null;
  if (null != stateFromStores) {
    let obj2 = { header: closure_9(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj4), children: closure_9(closure_7, obj5) };
    BottomSheet = require("Sheet/BottomSheet").BottomSheet;
    obj4 = { title: null, subtitle: null };
    ({ name: obj3.title, description: obj3.subtitle } = stateFromStores);
    obj5 = { style: obj6, children: closure_10(TableRowGroup, obj15) };
    obj6 = { paddingHorizontal: require("native").space.PX_12, paddingBottom: require("native").space.PX_16 };
    TableRowGroup = require("TableRowGroup").TableRowGroup;
    const obj7 = {
      icon: closure_9(require("PencilIcon").PencilIcon, {}),
      label: intl.string(require("intl").t.tdhW5b),
      onPress() {
          obj = { guildId: require, stickerId: importDefault };
          showGuildSettingsStickerCreateModalDefault(obj);
        }
    };
    const TableRow = require("TableRow").TableRow;
    intl = require("intl").intl;
    const items2 = [closure_9(TableRow, obj7), ];
    const obj8 = {
      icon: closure_9(require("TrashIcon").TrashIcon, { color: "text-feedback-critical" }),
      trailing: tmp8Result,
      label: intl2.string(require("intl").t["+ZhGOk"]),
      variant: "danger",
      disabled: tmp5,
      onPress: function onDeleteSticker() {
          return obj(...arguments);
        }
    };
    const TableRow2 = require("TableRow").TableRow;
    tmp8Result = null;
    if (tmp5) {
      tmp8Result = closure_9(closure_6, {});
    }
    obj15 = { hasIcons: true, children: items2 };
    intl2 = require("intl").intl;
    items2[1] = closure_9(TableRow2, obj8);
    tmp8Result2 = closure_9(BottomSheet, obj2);
  }
  return tmp8Result2;
});
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx");

export default memoResult;