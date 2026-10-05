// discord_app/modules/message_request/native/MessageRequestMutualServers.tsx
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4 },
  label: { flexShrink: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let PressableOpacity = iconSize;
      let tmp = dependencyMap;
      const cResult = iconSize(576).c(26);
      ({ style, onPress, iconSize, textVariant, suffix, userId } = arg0);
      if (undefined === iconSize) {
        iconSize = PressableOpacity(5971).GuildIconSizes.XXSMALL_12;
      }
      let str = "text-xs/medium";
      if (undefined !== textVariant) {
        str = textVariant;
      }
      const tmp3 = closure_6();
      const obj = iconSize(576);
      const mutualGuildsForMessageRequests = PressableOpacity(17060).useMutualGuildsForMessageRequests(userId);
      if (cResult[0] === mutualGuildsForMessageRequests.length) {
        if (cResult[1] === iconSize) {
          if (cResult[2] === mutualGuildsForMessageRequests) {
            if (cResult[3] === style) {
              if (cResult[4] === tmp3.container) {
                let tmp4 = cResult[5];
                let tmp5 = cResult[6];
                let tmp6 = cResult[7];
                let tmp7 = cResult[8];
              }
              let combined = tmp5;
              if (null != suffix) {
                const _HermesInternal = HermesInternal;
                combined = "" + tmp5 + " \u00B7 " + suffix;
              }
              if (cResult[14] === tmp3.label) {
                if (cResult[15] === combined) {
                  if (cResult[16] === str) {
                    let tmp18 = cResult[17];
                  }
                  if (cResult[18] === tmp4) {
                    if (cResult[19] === tmp6) {
                      if (cResult[20] === tmp7) {
                        if (cResult[21] === tmp18) {
                          let tmp21 = cResult[22];
                        }
                        let tmp24 = tmp21;
                        if (null != onPress) {
                          tmp24 = tmp21;
                          if (length > 0) {
                            if (cResult[23] === tmp21) {
                            }
                            PressableOpacity = PressableOpacity(5909).PressableOpacity;
                            const obj2 = { accessibilityRole: "button", onPress, children: tmp21 };
                            tmp = closure_4(PressableOpacity, obj2);
                            cResult[23] = tmp21;
                            cResult[24] = onPress;
                            cResult[25] = tmp;
                          }
                        }
                        return tmp24;
                      }
                    }
                  }
                  const obj3 = { style: tmp6, children: null };
                  const items = [tmp7, tmp18];
                  obj3.children = items;
                  const tmp23 = closure_5(tmp4, obj3);
                  cResult[18] = tmp4;
                  cResult[19] = tmp6;
                  cResult[20] = tmp7;
                  cResult[21] = tmp18;
                  cResult[22] = tmp23;
                  tmp21 = tmp23;
                }
              }
              const obj4 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: combined };
              const tmp20 = closure_4(PressableOpacity(4886).Text, obj4);
              cResult[14] = tmp3.label;
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
        if (length > 0) {
          const intl2 = PressableOpacity(1126).intl;
          const obj5 = { count: length };
          let formatResult = intl2.format(PressableOpacity(1126).t.eE3oep, obj5);
        } else {
          const intl = PressableOpacity(1126).intl;
          formatResult = intl.string(PressableOpacity(1126).t.jpY0X5);
        }
        cResult[9] = length;
        cResult[10] = formatResult;
      } else {
        if (cResult[11] === style) {
          if (cResult[12] === tmp3.container) {
            let tmp12 = cResult[13];
          }
          let tmp13 = length > 0;
          if (tmp13) {
            const obj6 = {
              size: iconSize,
              names: substr.map((name) => name.name),
              children: substr.map((guild) => React4(GuildIconDefault, { guild, size: iconSize }, guild.id)),
            };
            tmp13 = closure_4(PressableOpacity(12284).GuildIconPile, obj6);
          }
          cResult[0] = length;
          cResult[1] = iconSize;
          cResult[2] = mutualGuildsForMessageRequests;
          cResult[3] = style;
          cResult[4] = tmp3.container;
          cResult[5] = View;
          cResult[6] = tmp8;
          cResult[7] = tmp12;
          cResult[8] = tmp13;
          tmp7 = tmp13;
          tmp6 = tmp12;
          tmp5 = tmp8;
          tmp4 = View;
        }
        const items1 = [tmp3.container, style];
        cResult[11] = style;
        cResult[12] = tmp3.container;
        cResult[13] = items1;
        tmp12 = items1;
      }
      const PressableOpacityResult = PressableOpacity(17060);
    }
  : (textVariant) => {
      ({ onPress, iconSize } = textVariant);
      ({ userId, style } = textVariant);
      if (iconSize === undefined) {
        iconSize = iconSize(5971).GuildIconSizes.XXSMALL_12;
      }
      let str = textVariant.textVariant;
      if (str === undefined) {
        str = "text-xs/medium";
      }
      const suffix = textVariant.suffix;
      const tmp3 = closure_6();
      const mutualGuildsForMessageRequests = iconSize(17060).useMutualGuildsForMessageRequests(userId);
      const substr = mutualGuildsForMessageRequests.slice(0, 3);
      if (mutualGuildsForMessageRequests.length > 0) {
        const intl2 = tmp4(1126).intl;
        const obj2 = { count: length };
        let formatResult = intl2.format(tmp4(1126).t.eE3oep, obj2);
      } else {
        const intl = tmp4(1126).intl;
        formatResult = intl.string(tmp4(1126).t.jpY0X5);
      }
      const obj3 = { style: null, children: null };
      const items = [tmp3.container, style];
      obj3.style = items;
      let tmp9 = length > 0;
      if (tmp9) {
        const obj4 = {
          size: iconSize,
          names: substr.map((name) => name.name),
          children: substr.map((guild) => React4(GuildIconDefault, { guild, size: iconSize }, guild.id)),
        };
        tmp9 = closure_4(tmp4(12284).GuildIconPile, obj4);
      }
      const items1 = [tmp9];
      const obj5 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: null };
      let combined = formatResult;
      if (null != suffix) {
        const _HermesInternal = HermesInternal;
        combined = "" + formatResult + " \u00B7 " + suffix;
      }
      obj5.children = combined;
      items1[1] = closure_4(iconSize(4886).Text, obj5);
      obj3.children = items1;
      const tmp7Result = closure_5(View, obj3);
      let tmp11Result = tmp7Result;
      if (null != onPress) {
        tmp11Result = tmp7Result;
        if (length > 0) {
          const obj6 = { accessibilityRole: "button", onPress, children: tmp7Result };
          tmp11Result = closure_4(tmp4(5909).PressableOpacity, obj6);
        }
      }
      return tmp11Result;
    };
