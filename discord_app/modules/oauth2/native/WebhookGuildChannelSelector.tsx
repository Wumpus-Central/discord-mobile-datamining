// discord_app/modules/oauth2/native/WebhookGuildChannelSelector.tsx
import upsertRelationship from "upsertRelationship";
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "Button";
import { createChannelRecord } from "createChannelRecord";
import closure_8 from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { selectorGroup: { flexDirection: "column", gap: 8 }, select: null, label: null, error: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: require("Themes").colors.TEXT_SUBTLE, fontWeight: "500" };
let obj1 = { color: require("Themes").colors.TEXT_SUBTLE, fontWeight: "500" };
createCacheKey[3] = { color: require("Themes").unsafe_rawColors.RED_400 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const WebhookGuildChannelSelector = "WebhookGuildChannelSelector";
let obj2 = { color: require("Themes").unsafe_rawColors.RED_400 };
const result = require("noop").fileFinishedImporting("modules/oauth2/native/WebhookGuildChannelSelector.tsx");

export default function WebhookGuildChannelSelector(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const onChannelChange = selectedGuildId.onChannelChange;
  const error = selectedGuildId.error;
  let first;
  let callback;
  let React;
  let tmp = createCacheKey();
  let tmp2 = callback(React.useState(null), 2);
  first = tmp2[0];
  callback = tmp2[1];
  React = React.useRef(false);
  const items = [first, onChannelChange, selectedChannelId, selectedGuildId];
  const items1 = [onChannelChange, selectedGuildId];
  callback = React.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      tmp2 = tmp.guildId === selectedGuildId;
    }
    if (tmp2) {
      let obj = selectedChannelId(onChannelChange[10]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = selectedGuildId(onChannelChange[13]).intl;
      obj[0] = intl.string(selectedGuildId(onChannelChange[13]).t["Re/64R"]);
      const channels = tmp.channels;
      obj[1] = channels.map((id) => {
        const obj = { label: null, value: null };
        obj[0] = callback(4475).computeChannelName(callback2(id), mergeGuildAvatar, closure_8);
        obj[1] = id.id;
        return obj;
      });
      obj[2] = function onItemSelect(arg0) {
        dependencyMap(arg0);
        outer1_1(outer1_2[10]).hideActionSheet(outer1_13);
      };
      obj[3] = selectedChannelId;
      obj.openLazy(selectedGuildId(onChannelChange[12])(onChannelChange[11], onChannelChange.paths), outer1_13, obj);
      const tmp7 = selectedGuildId(onChannelChange[12])(onChannelChange[11], onChannelChange.paths);
      const tmp8 = outer1_13;
      const tmp9 = selectedChannelId;
    }
  }, items);
  const effect = React.useEffect(() => {
    function _updateChannels() {
      const self = this;
      const tmp = first((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0) {
          if (v0 === 2) {
            v0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "T", done: null };
            }
          } else {
            try {
              v0 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_2 = tmp5;
                  let closure_1 = tmp2;
                  closure_1 = undefined;
                  let obj2 = callback(outer2_2[15]);
                  c3 = 1;
                  v0 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = obj2.fetchChannels(callback);
                  return obj1;
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_1 = arg1;
                if (callback === callback) {
                  const sorted = closure_1.sort(() => { ... });
                  obj = { guildId: null, channels: null };
                  obj[0] = callback;
                  obj[1] = closure_1;
                  v0(obj);
                  outer1_5.current = true;
                }
                v0 = 3;
                return { value: "T", done: null };
              }
            } catch (tmp20) {
              v0 = tmp;
              throw tmp20;
            }
          }
        })();
      });
      const _updateChannels = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback(null);
    if (null == _updateChannels) {
      onChannelChange(null);
    } else {
      (function updateChannels(arg0) {
        const self = this;
        const apply = _updateChannels.apply;
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
  const effect1 = React.useEffect(() => {
    if (ref.current) {
      if (null == first) {
        if (null != selectedChannelId) {
          onChannelChange(null);
        }
      } else {
        const channels = tmp.channels;
        if (!channels.some((id) => id.id === closure_1)) {
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
    let obj = { style: null, children: null };
    obj[0] = tmp.selectorGroup;
    obj = { variant: "eyebrow", color: "text-default", children: null };
    let intl = selectedGuildId(onChannelChange[13]).intl;
    obj[2] = intl.string(selectedGuildId(onChannelChange[13]).t["8qKd+J"]);
    const items3 = [callback2(selectedGuildId(onChannelChange[16]).Text, obj), , , ];
    let tmp10Result = null;
    if (null != error) {
      tmp10Result = null;
      if ("" !== error) {
        obj = { style: null, children: null };
        obj[0] = tmp.error;
        obj[1] = error;
        tmp10Result = tmp10(tmp11(tmp12[17]).LegacyText, obj);
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
    let obj1 = { label: null, disabled: null, trailing: null, DEPRECATED_style: null, onPress: null };
    obj1[0] = name;
    obj1[1] = null == selectedGuildId;
    obj1[2] = callback2(selectedGuildId(onChannelChange[18]).FormRow.Arrow, {});
    obj1[3] = tmp.select;
    obj1[4] = callback;
    items3[2] = callback2(selectedGuildId(onChannelChange[18]).FormRow, obj1);
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.label;
    const intl3 = tmp11(tmp12[13]).intl;
    obj2[1] = intl3.string(selectedGuildId(onChannelChange[13]).t.kQXMfN);
    items3[3] = callback2(selectedGuildId(onChannelChange[17]).LegacyText, obj2);
    obj[1] = items3;
    return closure_11(View, obj);
  }
};
export const useStyles = createCacheKey;