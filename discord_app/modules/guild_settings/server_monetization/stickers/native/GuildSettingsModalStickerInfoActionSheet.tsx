// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import StickersStore from "../../../../stickers/StickersStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx",
);

export default noop.memo(function GuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId: require, stickerId: importDefault, hideActionSheet } = arg0);
  _slicedToArray = undefined;
  noop = async function _onDeleteSticker() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null != stateFromStores) {
            _slicedToArray(true);
            c3 = 2;
            v3 = 3;
            c4 = 1;
            let obj1 = { value: tmp4(tmp39[7]).deleteGuildSticker(tmp34), done: false };
            return obj1;
          } else {
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = v3(tmp39[8]);
            const obj2 = { key: "IMAGE_PICKER_ERROR", IconComponent: tmp4(tmp39[9]).CircleErrorIcon, content: null };
            const intl = tmp4(tmp39[10]).intl;
            obj2.content = intl.string(tmp4(tmp39[10]).t["5NMPSS"]);
            obj1.open(obj2);
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
        c3 = 0;
        closure_128_4(false);
        throw tmp39;
      } catch (tmp39) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp39;
        } else if (tmp2 === tmp41) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  let obj = require("initialize");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stickersByGuildId = StickersStore.getStickersByGuildId(guildId);
    let found;
    if (stickersByGuildId != null) {
      found = stickersByGuildId.find((id) => id.id === stickerId);
    }
    return found;
  });
  [tmp5, c4] = _slicedToArray(noop.useState(false), 2);
  const items1 = [hideActionSheet, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items1);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = { header: null, children: null };
    obj = { title: null, subtitle: null };
    ({ name: obj3.title, description: obj3.subtitle } = stateFromStores);
    obj.header = closure_9(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj);
    let obj1 = { style: null, children: null };
    let obj2 = { paddingHorizontal: require("native").space.PX_12, paddingBottom: require("native").space.PX_16 };
    obj1.style = obj2;
    const obj3 = { icon: closure_9(require("PencilIcon").PencilIcon, {}), label: null, onPress: null };
    let intl = require("util").intl;
    obj3.label = intl.string(require("util").t.tdhW5b);
    obj3.onPress = function onPress() {
      showGuildSettingsStickerCreateModalDefault({ guildId, stickerId });
    };
    const items2 = [closure_9(require("TableRow").TableRow, obj3)];
    const obj4 = {
      icon: closure_9(require("TrashIcon").TrashIcon, { color: "text-feedback-critical" }),
      trailing: null,
      label: null,
      variant: "danger",
      disabled: null,
      onPress: null,
    };
    tmp8Result = null;
    if (tmp5) {
      tmp8Result = closure_9(closure_6, {});
    }
    const obj5 = { hasIcons: true, children: null };
    obj4.trailing = tmp8Result;
    const intl2 = require("util").intl;
    obj4.label = intl2.string(require("util").t["+ZhGOk"]);
    obj4.disabled = tmp5;
    obj4.onPress = function onDeleteSticker() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items2[1] = closure_9(require("TableRow").TableRow, obj4);
    obj5.children = items2;
    obj1.children = closure_10(require("TableRowGroup").TableRowGroup, obj5);
    obj.children = closure_9(closure_7, obj1);
    tmp8Result = closure_9(require("Sheet/BottomSheet").BottomSheet, obj);
  }
  return tmp8Result;
});
