// discord_app/modules/oauth2/native/WebhookGuildChannelSelector.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const createChannelRecord = fn(1961).createChannelRecord;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { selectorGroup: { flexDirection: "column", gap: 8 }, select: null, label: null, error: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
createStyles.select = createStyles;
createStyles.label = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
let obj1 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
createStyles.error = { color: nativeDefault.unsafe_rawColors.RED_400 };
createStyles = createStyles.createStyles(createStyles);
const WebhookGuildChannelSelector = "WebhookGuildChannelSelector";
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const error = selectedGuildId.error;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = createStyles();
  let tmp2 = _slicedToArray(noop.useState(null), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  noop = noop.useRef(false);
  const items = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const items1 = [onChannelChange, selectedGuildId];
  const callback = noop.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = first.guildId === selectedGuildId;
    }
    if (tmp2) {
      let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t["Re/64R"]);
      const channels = first.channels;
      obj.items = channels.map((id) => {
        const obj = {
          label: selectedGuildId(4713).computeChannelName(closure_1_7(id), closure_1_9, closure_1_8),
          value: id.id,
        };
        return obj;
      });
      obj.onItemSelect = function onItemSelect(arg0) {
        dependencyMap(arg0);
        selectedChannelId(onChannelChange[10]).hideActionSheet(WebhookGuildChannelSelector);
      };
      obj.selectedItem = selectedChannelId;
      obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), WebhookGuildChannelSelector, obj);
      const tmp7 = asyncRequireImpl(9426, dependencyMap.paths);
    }
  }, items);
  const effect = noop.useEffect(() => {
    closure_0 = async function _updateChannels(arg0) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          v3 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              let obj2 = selectedGuildId(onChannelChange[15]);
              c3 = 1;
              v3 = 1;
              const obj1 = { value: obj2.fetchChannels(closure_0), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_1 = value;
            if (closure_0 === closure_129_0) {
              const sorted = closure_129_1.sort((name, name2) => {
                name = name.name;
                return name.localeCompare(name2.name);
              });
              obj = { guildId: closure_129_0, channels: closure_129_1 };
              v3(obj);
              ref.current = true;
            }
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          v3 = tmp;
          throw tmp20;
        }
      }
    };
    closure_4(null);
    if (null == closure_0) {
      onChannelChange(null);
    } else {
      (function updateChannels(arg0) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(tmp2);
    }
  }, items1);
  const items2 = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const effect1 = noop.useEffect(() => {
    if (ref.current) {
      if (null == first) {
        if (null != selectedChannelId) {
          onChannelChange(null);
        }
      } else {
        const channels = tmp.channels;
        if (!channels.some((id) => id.id === selectedChannelId)) {
          onChannelChange(null);
        }
      }
    }
  }, items2);
  if (null == selectedGuildId) {
    return null;
  } else {
    let found;
    if (first != null) {
      let channels = first.channels;
      found = channels.find((id) => id.id === selectedChannelId);
    }
    let obj = { style: tmp.selectorGroup, children: null };
    obj = { variant: "eyebrow", color: "text-default", children: null };
    let intl = selectedGuildId(onChannelChange[13]).intl;
    obj.children = intl.string(selectedGuildId(onChannelChange[13]).t["8qKd+J"]);
    const items3 = [closure_10(selectedGuildId(onChannelChange[16]).Text, obj), , ,];
    let tmp10Result = null;
    if (null != error) {
      tmp10Result = null;
      if ("" !== error) {
        obj = { style: tmp.error, children: error };
        tmp10Result = closure_10(tmp11(tmp12[17]).LegacyText, obj);
      }
    }
    items3[1] = tmp10Result;
    let name;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl2 = tmp11(tmp12[13]).intl;
      name = intl2.string(tmp11(tmp12[13]).t["Re/64R"]);
    }
    let obj1 = {
      label: name,
      disabled: null == selectedGuildId,
      trailing: closure_10(selectedGuildId(onChannelChange[18]).FormRow.Arrow, {}),
      DEPRECATED_style: tmp.select,
      onPress: callback,
    };
    items3[2] = closure_10(selectedGuildId(onChannelChange[18]).FormRow, obj1);
    let obj2 = { style: tmp.label, children: null };
    const intl3 = tmp11(tmp12[13]).intl;
    obj2.children = intl3.string(selectedGuildId(onChannelChange[13]).t.kQXMfN);
    items3[3] = closure_10(selectedGuildId(onChannelChange[17]).LegacyText, obj2);
    obj.children = items3;
    return closure_11(View, obj);
  }
}
export const useStyles = createStyles;
