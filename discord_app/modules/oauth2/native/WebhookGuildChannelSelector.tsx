// === Module 8979: WebhookGuildChannelSelector ===

// Module 8979 (WebhookGuildChannelSelector)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let closure_2, v3;

let c10;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const createChannelRecord = ChannelRecord.createChannelRecord;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { selectorGroup: { flexDirection: "column", gap: 8 }, select: obj2, label: obj3, error: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, fontWeight: "500" };
obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const styles = createStyles(obj);
const WebhookGuildChannelSelector_str = "WebhookGuildChannelSelector";
const result = size.fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  let closure_4;
  let first;
  let intl;
  let intl3;
  let items3;
  let ref;
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const error = selectedGuildId.error;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = styles();
  [first, _slicedToArray] = react.useState(null);
  react = react.useRef(false);
  const items = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const items1 = [onChannelChange, selectedGuildId];
  const callback = react.useCallback(() => {
    let channels;
    let intl;
    const tmp2 = null != first && first.guildId === selectedGuildId;
    if (tmp2) {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        title: intl.string(intl4.t["Re/64R"]),
        items: channels.map((id) => {
            let obj2;
            const obj = { label: obj2.computeChannelName(closure_1_7(id), closure_1_9, closure_1_8), value: id.id };
            obj2 = selectedGuildId(onChannelChange[14]);
            return obj;
          }),
        onItemSelect(arg0) {
            closure_1_2(arg0);
            const obj = selectedChannelId(onChannelChange[10]);
            obj.hideActionSheet(WebhookGuildChannelSelector_str);
          },
        selectedItem: selectedChannelId,
        hasIcons: false
      };
      ActionSheetActionCreatorsDefault;
      const tmp8 = asyncRequire(8978, dependencyMap.paths);
      intl = intl4.intl;
      channels = first.channels;
      openLazy(tmp8, WebhookGuildChannelSelector_str, obj);
    }
  }, items);
  const effect = react.useEffect(() => {
    function updateChannels(arg0) {
      return obj(...arguments);
    }
    let obj = function _updateChannels() {
      obj = _asyncToGenerator(async (guildId) => {
        let c3 = 0;
        let c4 = 0;
        return (async (arg0) => {
          let obj3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
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
                  return { value, done: true };
                } else {
                  closure_2 = tmp4;
                  channels = undefined;
                  c3 = 1;
                  v3 = 1;
                  const obj5 = { value: obj3.fetchChannels(guildId), done: false };
                  obj3 = closure_2_0(closure_2_2[15]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                return { value, done: true };
              } else {
                channels = value;
                if (guildId === guildId) {
                  const sorted = channels.sort((name, name2) => {
                    name = name.name;
                    return name.localeCompare(name2.name);
                  });
                  obj = { guildId, channels };
                  v3(obj);
                  closure_1_5.current = true;
                }
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              v3 = 3;
              throw tmp19;
            }
          }
        })();
      });
      return obj(...arguments);
    };
    const tmp = closure_4(null);
    if (null == obj) {
      onChannelChange(null);
    } else {
      const tmp3 = updateChannels(tmp2);
    }
  }, items1);
  const items2 = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const effect1 = react.useEffect(() => {
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
    let obj = { style: tmp.selectorGroup, children: items3 };
    let obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(selectedGuildId(onChannelChange[13]).t["8qKd+J"]) };
    const Text = selectedGuildId(onChannelChange[16]).Text;
    intl = selectedGuildId(onChannelChange[13]).intl;
    items3 = [closure_10(Text, obj2), , , ];
    let tmp10Result = null;
    if (null != error) {
      tmp10Result = null;
      if ("" !== error) {
        let obj3 = { style: tmp.error, children: error };
        tmp10Result = closure_10(tmp11(tmp12[17]).LegacyText, obj3);
      }
    }
    items3[1] = tmp10Result;
    let name;
    const FormRow = tmp11(tmp12[18]).FormRow;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl2 = tmp11(tmp12[13]).intl;
      name = intl2.string(tmp11(tmp12[13]).t["Re/64R"]);
    }
    const obj4 = { label: name, disabled: null == selectedGuildId, trailing: closure_10(tmp11(onChannelChange[18]).FormRow.Arrow, {}), DEPRECATED_style: tmp.select, onPress: callback };
    items3[2] = closure_10(FormRow, obj4);
    let obj5 = { style: tmp.label, children: intl3.string(tmp11(onChannelChange[13]).t.kQXMfN) };
    const LegacyText = tmp11(tmp12[17]).LegacyText;
    intl3 = tmp11(tmp12[13]).intl;
    items3[3] = closure_10(LegacyText, obj5);
    return closure_11(View, obj);
  }
};
export const useStyles = styles;