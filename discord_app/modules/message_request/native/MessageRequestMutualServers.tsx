// discord_app/modules/message_request/native/MessageRequestMutualServers.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4 },
  label: { flexShrink: 1 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let iconSize;
      let items;
      let onPress;
      let style;
      let suffix;
      let textVariant;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let userId;
      let obj = iconSize(576);
      const cResult = obj.c(26);
      ({ style, onPress, iconSize, textVariant, suffix, userId } = arg0);
      if (undefined === iconSize) {
        iconSize = tmp(5978).GuildIconSizes.XXSMALL_12;
      }
      let str = "text-xs/medium";
      if (undefined !== textVariant) {
        str = textVariant;
      }
      const tmp4 = closure_6();
      const tmpResult = iconSize(17086);
      const mutualGuildsForMessageRequests = tmpResult.useMutualGuildsForMessageRequests(userId);
      if (cResult[0] === mutualGuildsForMessageRequests.length) {
        if (cResult[1] === iconSize) {
          if (cResult[2] === mutualGuildsForMessageRequests) {
            if (cResult[3] === style) {
              if (cResult[4] === tmp4.container) {
                tmp5 = cResult[5];
                tmp6 = cResult[6];
                tmp7 = cResult[7];
                tmp8 = cResult[8];
              }
              let combined = tmp6;
              if (null != suffix) {
                const _HermesInternal = HermesInternal;
                combined = "" + tmp6 + " \u00B7 " + suffix;
              }
              if (cResult[14] === tmp4.label) {
                if (cResult[15] === combined) {
                  let tmp18;
                  if (cResult[16] === str) {
                    tmp18 = cResult[17];
                  }
                  if (cResult[18] === tmp5) {
                    if (cResult[19] === tmp7) {
                      if (cResult[20] === tmp8) {
                        let tmp21;
                        if (cResult[21] === tmp18) {
                          tmp21 = cResult[22];
                        }
                        let tmp24 = tmp21;
                        if (null != onPress) {
                          tmp24 = tmp21;
                          if (mutualGuildsForMessageRequests.length > 0) {
                            if (cResult[23] === tmp21) {
                              let tmp25;
                              if (cResult[24] === onPress) {
                                tmp25 = cResult[25];
                              }
                              tmp24 = tmp25;
                            }
                            const obj2 = { accessibilityRole: "button", onPress, children: tmp21 };
                            const tmp27 = closure_4(iconSize(5916).PressableOpacity, obj2);
                            cResult[23] = tmp21;
                            cResult[24] = onPress;
                            cResult[25] = tmp27;
                            tmp25 = tmp27;
                          }
                        }
                        return tmp24;
                      }
                    }
                  }
                  const obj3 = { style: tmp7, children: items };
                  items = [tmp8, tmp18];
                  const tmp23 = closure_5(tmp5, obj3);
                  cResult[18] = tmp5;
                  cResult[19] = tmp7;
                  cResult[20] = tmp8;
                  cResult[21] = tmp18;
                  cResult[22] = tmp23;
                  tmp21 = tmp23;
                }
              }
              const obj4 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp4.label, children: combined };
              const tmp20 = closure_4(iconSize(4892).Text, obj4);
              cResult[14] = tmp4.label;
              cResult[15] = combined;
              cResult[16] = str;
              cResult[17] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
      }
      const substr = mutualGuildsForMessageRequests.slice(0, 3);
      if (cResult[9] !== mutualGuildsForMessageRequests.length) {
        let formatResult;
        if (mutualGuildsForMessageRequests.length > 0) {
          const intl2 = tmp(1126).intl;
          const obj5 = { count: mutualGuildsForMessageRequests.length };
          formatResult = intl2.format(tmp(1126).t.eE3oep, obj5);
        } else {
          const intl = tmp(1126).intl;
          formatResult = intl.string(tmp(1126).t.jpY0X5);
        }
        cResult[9] = mutualGuildsForMessageRequests.length;
        cResult[10] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[10];
      }
      if (cResult[11] === style) {
        let tmp12;
        if (cResult[12] === tmp4.container) {
          tmp12 = cResult[13];
        }
        let tmp13 = length > 0;
        if (tmp13) {
          const obj6 = {
            size: iconSize,
            names: substr.map((name) => name.name),
            children: substr.map((guild) => {
              const obj = { guild, size: iconSize };
              return React3(GuildIconDefault, obj, guild.id);
            }),
          };
          const GuildIconPile = tmp(12299).GuildIconPile;
          tmp13 = closure_4(GuildIconPile, obj6);
        }
        cResult[0] = mutualGuildsForMessageRequests.length;
        cResult[1] = iconSize;
        cResult[2] = mutualGuildsForMessageRequests;
        cResult[3] = style;
        cResult[4] = tmp4.container;
        cResult[5] = View;
        cResult[6] = tmp9;
        cResult[7] = tmp12;
        cResult[8] = tmp13;
        tmp8 = tmp13;
        tmp7 = tmp12;
        tmp6 = tmp9;
        tmp5 = View;
      }
      const items1 = [tmp4.container, style];
      cResult[11] = style;
      cResult[12] = tmp4.container;
      cResult[13] = items1;
      tmp12 = items1;
    }
  : (textVariant) => {
      let combined;
      let formatResult;
      let iconSize;
      let items;
      let items1;
      let onPress;
      let style;
      let userId;
      ({ onPress, iconSize } = textVariant);
      ({ userId, style } = textVariant);
      if (iconSize === undefined) {
        iconSize = iconSize(5978).GuildIconSizes.XXSMALL_12;
      }
      let str = textVariant.textVariant;
      if (str === undefined) {
        str = "text-xs/medium";
      }
      const suffix = textVariant.suffix;
      const tmp3 = closure_6();
      let obj = iconSize(17086);
      const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
      const substr = mutualGuildsForMessageRequests.slice(0, 3);
      if (mutualGuildsForMessageRequests.length > 0) {
        const intl2 = tmp4(1126).intl;
        const obj2 = { count: mutualGuildsForMessageRequests.length };
        formatResult = intl2.format(tmp4(1126).t.eE3oep, obj2);
      } else {
        const intl = tmp4(1126).intl;
        formatResult = intl.string(tmp4(1126).t.jpY0X5);
      }
      const obj3 = { style: items, children: items1 };
      items = [tmp3.container, style];
      let tmp9 = length > 0;
      if (tmp9) {
        const obj4 = {
          size: iconSize,
          names: substr.map((name) => name.name),
          children: substr.map((guild) => {
            const obj = { guild, size: iconSize };
            return React3(GuildIconDefault, obj, guild.id);
          }),
        };
        const GuildIconPile = tmp4(12299).GuildIconPile;
        tmp9 = closure_4(GuildIconPile, obj4);
      }
      items1 = [tmp9];
      const obj5 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: combined };
      combined = formatResult;
      const Text = tmp4(4892).Text;
      if (null != suffix) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatResult + " \u00B7 " + suffix;
      }
      items1[1] = closure_4(Text, obj5);
      const tmp7Result = closure_5(View, obj3);
      let tmp11Result = tmp7Result;
      if (null != onPress) {
        tmp11Result = tmp7Result;
        if (mutualGuildsForMessageRequests.length > 0) {
          const obj6 = { accessibilityRole: "button", onPress, children: tmp7Result };
          tmp11Result = closure_4(tmp4(5916).PressableOpacity, obj6);
        }
      }
      return tmp11Result;
    };
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default tmp4;
