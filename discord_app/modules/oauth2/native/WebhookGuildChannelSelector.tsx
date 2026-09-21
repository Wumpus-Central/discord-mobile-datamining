// discord_app/modules/oauth2/native/WebhookGuildChannelSelector.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const createChannelRecord = fn(2045).createChannelRecord;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  selectorGroup: { flexDirection: "column", gap: 8 },
  select: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs },
  label: null,
  error: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
obj2.label = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
obj2.error = { color: nativeDefault.unsafe_rawColors.RED_400 };
const styles = createStyles.createStyles(obj2);
const WebhookGuildChannelSelector = "WebhookGuildChannelSelector";
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const error = selectedGuildId.error;
  first = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = styles();
  [first, _slicedToArray] = noop.useState(null);
  noop = noop.useRef(false);
  const items = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const items1 = [onChannelChange, selectedGuildId];
  const callback = noop.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = first.guildId === selectedGuildId;
    }
    if (tmp2) {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      let obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t["Re/64R"]);
      const channels = first.channels;
      obj2.items = channels.map((id) => {
        const obj = {
          label: selectedGuildId(4909).computeChannelName(closure_1_7(id), closure_1_9, closure_1_8),
          value: id.id,
        };
        return obj;
      });
      obj2.onItemSelect = function onItemSelect(arg0) {
        dependencyMap(arg0);
        selectedChannelId(onChannelChange[10]).hideActionSheet(WebhookGuildChannelSelector);
      };
      obj2.selectedItem = selectedChannelId;
      obj.openLazy(asyncRequireImpl(9540, dependencyMap.paths), WebhookGuildChannelSelector, obj2);
      const tmp7 = asyncRequireImpl(9540, dependencyMap.paths);
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              c3 = 1;
              v3 = 1;
              const obj5 = { value: selectedGuildId(onChannelChange[15]).fetchChannels(closure_0), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = value;
            if (closure_0 === closure_129_0) {
              const sorted = closure_129_1.sort((name, name2) => {
                name = name.name;
                return name.localeCompare(name2.name);
              });
              const obj = { guildId: closure_129_0, channels: closure_129_1 };
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
    let obj2 = { variant: "eyebrow", color: "text-default", children: null };
    let intl = selectedGuildId(onChannelChange[13]).intl;
    obj2.children = intl.string(selectedGuildId(onChannelChange[13]).t["8qKd+J"]);
    const items3 = [closure_10(selectedGuildId(onChannelChange[16]).Text, obj2), , ,];
    let tmp10Result = null;
    if (null != error) {
      tmp10Result = null;
      if ("" !== error) {
        const obj3 = { style: tmp.error, children: error };
        tmp10Result = closure_10(tmp11(tmp12[17]).LegacyText, obj3);
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
    let obj4 = {
      label: name,
      disabled: null == selectedGuildId,
      trailing: closure_10(selectedGuildId(onChannelChange[18]).FormRow.Arrow, {}),
      DEPRECATED_style: tmp.select,
      onPress: callback,
    };
    items3[2] = closure_10(selectedGuildId(onChannelChange[18]).FormRow, obj4);
    let obj5 = { style: tmp.label, children: null };
    const intl3 = tmp11(tmp12[13]).intl;
    obj5.children = intl3.string(selectedGuildId(onChannelChange[13]).t.kQXMfN);
    items3[3] = closure_10(selectedGuildId(onChannelChange[17]).LegacyText, obj5);
    obj.children = items3;
    return closure_11(View, obj);
  }
}
export const useStyles = styles;
