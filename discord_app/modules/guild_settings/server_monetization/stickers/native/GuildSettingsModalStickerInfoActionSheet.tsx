// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "showGuildSettingsStickerCreateModal";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import jsxProd from "jsxProd";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
let c5 = importAllResult;
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const memoResult = importAllResult.memo(function GuildSettingsModalStickerInfoActionSheet(arg0) {
  let c4;
  let hideActionSheet;
  let importDefault;
  let require;
  let tmp5;
  ({ guildId: require, stickerId: importDefault, hideActionSheet } = arg0);
  let stateFromStores;
  let callback;
  function _onDeleteSticker() {
    const self = this;
    const tmp = stateFromStores(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              if (null != c3) {
                v02(true);
                c3 = 2;
                v0 = 3;
                v02 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = outer1_0(outer1_2[7]).deleteGuildSticker(tmp34);
                return obj1;
              } else {
                v02 = 3;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              obj1 = v0(outer1_2[8]);
              const obj2 = { key: "IMAGE_PICKER_ERROR", IconComponent: null, content: null };
              obj2[1] = outer1_0(outer1_2[9]).CircleErrorIcon;
              const intl = outer1_0(outer1_2[10]).intl;
              obj2[2] = intl.string(outer1_0(outer1_2[10]).t["5NMPSS"]);
              obj1.open(obj2);
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              v02(false);
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback();
              c3 = 1;
            }
            c3 = 0;
            v02(false);
          }
          c3 = 0;
          v02(false);
          throw callback;
        } catch (tmp39) {
          callback = tmp39;
          if (tmp5 === c3) {
            v02 = tmp3;
            throw tmp39;
          } else if (tmp2 === tmp41) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    });
    const _onDeleteSticker = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = require(hideActionSheet[6]);
  const items = [loadSavedGuildStickers];
  stateFromStores = obj.useStateFromStores(items, () => {
    const stickersByGuildId = outer1_8.getStickersByGuildId(closure_0);
    let found;
    if (stickersByGuildId != null) {
      found = stickersByGuildId.find((id) => id.id === closure_1);
    }
    return found;
  });
  [tmp5, c4] = callback(_onDeleteSticker.useState(false), 2);
  const items1 = [hideActionSheet, stateFromStores];
  const effect = _onDeleteSticker.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items1);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = { header: null, children: null };
    obj = { title: null, subtitle: null };
    ({ name: obj3[0], description: obj3[1] } = stateFromStores);
    obj[0] = callback2(tmp(tmp2[12]).BottomSheetTitleHeader, obj);
    let obj1 = { style: null, children: null };
    let obj2 = { paddingHorizontal: null, paddingBottom: null };
    obj2[0] = importDefault(tmp2[13]).space.PX_12;
    obj2[1] = importDefault(tmp2[13]).space.PX_16;
    obj1[0] = obj2;
    const obj3 = { icon: null, label: null, onPress: null };
    obj3[0] = callback2(tmp(tmp2[16]).PencilIcon, {});
    let intl = tmp(tmp2[10]).intl;
    obj3[1] = intl.string(tmp(tmp2[10]).t.tdhW5b);
    obj3[2] = function onPress() {
      outer1_1(hideActionSheet[17])({ guildId: closure_0, stickerId: closure_1 });
    };
    const items2 = [callback2(tmp(tmp2[15]).TableRow, obj3), ];
    const obj4 = { icon: null, trailing: null, label: null, variant: "danger", disabled: null, onPress: null };
    obj4[0] = callback2(tmp(tmp2[18]).TrashIcon, { color: "text-feedback-critical" });
    tmp8Result = null;
    if (tmp5) {
      tmp8Result = tmp8(closure_6, {});
    }
    const obj5 = { hasIcons: true, children: null };
    obj4[1] = tmp8Result;
    const intl2 = tmp(tmp2[10]).intl;
    obj4[2] = intl2.string(tmp(tmp2[10]).t["+ZhGOk"]);
    obj4[4] = tmp5;
    obj4[5] = function onDeleteSticker() {
      const self = this;
      const apply = _onDeleteSticker.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items2[1] = callback2(tmp(tmp2[15]).TableRow, obj4);
    obj5[1] = items2;
    obj1[1] = closure_10(tmp(tmp2[14]).TableRowGroup, obj5);
    obj[1] = callback2(closure_7, obj1);
    tmp8Result = tmp8(tmp(tmp2[11]).BottomSheet, obj);
    const tmp11 = closure_10;
    const tmp9 = closure_7;
  }
  return tmp8Result;
});
const result = require("noop").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx");

export default memoResult;