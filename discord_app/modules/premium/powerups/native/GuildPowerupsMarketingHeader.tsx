// discord_app/modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildPowerupsActionCreators from "../GuildPowerupsActionCreators.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import useMarketablePowerupPerksDefault from "../hooks/useMarketablePowerupPerks.tsx";
import orderMarketablePerksForDisplayDefault from "../utils/orderMarketablePerksForDisplay.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: null, text: null };
let obj3 = { padding: nativeDefault.space.PX_12, backgroundColor: null };
let obj4 = _modDef683("#000000");
obj3.backgroundColor = _modDef683("#000000").alpha(0.18).hex();
obj2.container = obj3;
let obj5 = { textAlign: "center", color: null };
const alphaResult = _modDef683("#000000").alpha(0.18);
let obj7 = _modDef683("#FFFFFF");
obj5.color = _modDef683("#FFFFFF").alpha(0.5).hex();
obj2.text = obj5;
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (powerup) => {
      const cResult = c.c(2);
      powerup = powerup.powerup;
      if (cResult[0] !== powerup.title) {
        const obj2 = { color: "text-overlay-light", variant: "text-sm/semibold", children: powerup.title };
        const tmp6 = jsx(Text_Text.Text, {
          color: "text-overlay-light",
          variant: "text-sm/semibold",
          children: powerup.title,
        });
        cResult[0] = powerup.title;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (children) =>
      jsx(Text_Text.Text, {
        color: "text-overlay-light",
        variant: "text-sm/semibold",
        children: children.powerup.title,
      });
ReactCompilerGating = fn(558);
const alphaResult1 = _modDef683("#FFFFFF").alpha(0.5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(576).c(13);
      guild = guild.guild;
      const tmp4 = closure_7();
      arr = arr(13402)(guild.id);
      if (cResult[0] !== guild.id) {
        const fn = function s() {
          if (GuildPowerupsStore.shouldFetchCatalogForGuild(guild.id)) {
            const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guild.id);
          }
        };
        const items = [guild.id];
        cResult[0] = guild.id;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (arr(12185)(guild.id)) {
        let num4;
        if (arr != null) {
          num4 = arr.length;
        }
        if (num4 == null) {
          num4 = 0;
        }
        if (0 !== num4) {
          if (cResult[3] !== arr) {
            class F {
              constructor() {
                arr = closure_1;
                if (null != closure_1) {
                  num = 0;
                  if (0 !== arr.length) {
                    tmp8 = closure_2;
                    tmp7 = closure_1;
                    arr2 = closure_1(closure_2[13])(arr);
                    num2 = 1;
                    if (1 === arr2.length) {
                      tmp5 = jsx;
                      tmp6 = f63859;
                      obj1 = { powerup: null };
                      obj1.powerup = arr2[0];
                      formatResult = jsx(f63859, obj1);
                    } else {
                      tmp = closure_0;
                      intl = closure_0(tmp8[14]).intl;
                      obj = { perk1: null, perk2: null };
                      tmp2 = jsx;
                      tmp3 = f63859;
                      obj5 = { powerup: null };
                      obj5.powerup = arr2[0];
                      obj.perk1 = jsx(f63859, obj5);
                      obj6 = { powerup: null };
                      obj6.powerup = arr2[1];
                      obj.perk2 = jsx(f63859, obj6);
                      formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                    }
                    return formatResult;
                  }
                }
                return "";
              }
            }
            cResult[3] = arr;
            cResult[4] = F;
          } else {
            class F {
              constructor() {
                arr = closure_1;
                if (null != closure_1) {
                  num = 0;
                  if (0 !== arr.length) {
                    tmp8 = closure_2;
                    tmp7 = closure_1;
                    arr2 = closure_1(closure_2[13])(arr);
                    num2 = 1;
                    if (1 === arr2.length) {
                      tmp5 = jsx;
                      tmp6 = f63859;
                      obj1 = { powerup: null };
                      obj1.powerup = arr2[0];
                      formatResult = jsx(f63859, obj1);
                    } else {
                      tmp = closure_0;
                      intl = closure_0(tmp8[14]).intl;
                      obj = { perk1: null, perk2: null };
                      tmp2 = jsx;
                      tmp3 = f63859;
                      obj5 = { powerup: null };
                      obj5.powerup = arr2[0];
                      obj.perk1 = jsx(f63859, obj5);
                      obj6 = { powerup: null };
                      obj6.powerup = arr2[1];
                      obj.perk2 = jsx(f63859, obj6);
                      formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                    }
                    return formatResult;
                  }
                }
                return "";
              }
            }
          }
          ({ container, text } = tmp4);
          if (cResult[5] !== F) {
            class F {
              constructor() {
                arr = closure_1;
                if (null != closure_1) {
                  num = 0;
                  if (0 !== arr.length) {
                    tmp8 = closure_2;
                    tmp7 = closure_1;
                    arr2 = closure_1(closure_2[13])(arr);
                    num2 = 1;
                    if (1 === arr2.length) {
                      tmp5 = jsx;
                      tmp6 = f63859;
                      obj1 = { powerup: null };
                      obj1.powerup = arr2[0];
                      formatResult = jsx(f63859, obj1);
                    } else {
                      tmp = closure_0;
                      intl = closure_0(tmp8[14]).intl;
                      obj = { perk1: null, perk2: null };
                      tmp2 = jsx;
                      tmp3 = f63859;
                      obj5 = { powerup: null };
                      obj5.powerup = arr2[0];
                      obj.perk1 = jsx(f63859, obj5);
                      obj6 = { powerup: null };
                      obj6.powerup = arr2[1];
                      obj.perk2 = jsx(f63859, obj6);
                      formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                    }
                    return formatResult;
                  }
                }
                return "";
              }
            }
            let obj3 = { perks: F() };
            let formatResult = obj2.format(tmp5(2553)["7lwpzR"], obj3);
            cResult[5] = F;
            cResult[6] = formatResult;
          } else {
            class F {
              constructor() {
                arr = closure_1;
                if (null != closure_1) {
                  num = 0;
                  if (0 !== arr.length) {
                    tmp8 = closure_2;
                    tmp7 = closure_1;
                    arr2 = closure_1(closure_2[13])(arr);
                    num2 = 1;
                    if (1 === arr2.length) {
                      tmp5 = jsx;
                      tmp6 = f63859;
                      obj1 = { powerup: null };
                      obj1.powerup = arr2[0];
                      formatResult = jsx(f63859, obj1);
                    } else {
                      tmp = closure_0;
                      intl = closure_0(tmp8[14]).intl;
                      obj = { perk1: null, perk2: null };
                      tmp2 = jsx;
                      tmp3 = f63859;
                      obj5 = { powerup: null };
                      obj5.powerup = arr2[0];
                      obj.perk1 = jsx(f63859, obj5);
                      obj6 = { powerup: null };
                      obj6.powerup = arr2[1];
                      obj.perk2 = jsx(f63859, obj6);
                      formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                    }
                    return formatResult;
                  }
                }
                return "";
              }
            }
          }
          if (cResult[7] === tmp4.text) {
            class F {
              constructor() {
                arr = closure_1;
                if (null != closure_1) {
                  num = 0;
                  if (0 !== arr.length) {
                    tmp8 = closure_2;
                    tmp7 = closure_1;
                    arr2 = closure_1(closure_2[13])(arr);
                    num2 = 1;
                    if (1 === arr2.length) {
                      tmp5 = jsx;
                      tmp6 = f63859;
                      obj1 = { powerup: null };
                      obj1.powerup = arr2[0];
                      formatResult = jsx(f63859, obj1);
                    } else {
                      tmp = closure_0;
                      intl = closure_0(tmp8[14]).intl;
                      obj = { perk1: null, perk2: null };
                      tmp2 = jsx;
                      tmp3 = f63859;
                      obj5 = { powerup: null };
                      obj5.powerup = arr2[0];
                      obj.perk1 = jsx(f63859, obj5);
                      obj6 = { powerup: null };
                      obj6.powerup = arr2[1];
                      obj.perk2 = jsx(f63859, obj6);
                      formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                    }
                    return formatResult;
                  }
                }
                return "";
              }
            }
            if (cResult[10] === tmp4.container) {
              class F {
                constructor() {
                  arr = closure_1;
                  if (null != closure_1) {
                    num = 0;
                    if (0 !== arr.length) {
                      tmp8 = closure_2;
                      tmp7 = closure_1;
                      arr2 = closure_1(closure_2[13])(arr);
                      num2 = 1;
                      if (1 === arr2.length) {
                        tmp5 = jsx;
                        tmp6 = f63859;
                        obj1 = { powerup: null };
                        obj1.powerup = arr2[0];
                        formatResult = jsx(f63859, obj1);
                      } else {
                        tmp = closure_0;
                        intl = closure_0(tmp8[14]).intl;
                        obj = { perk1: null, perk2: null };
                        tmp2 = jsx;
                        tmp3 = f63859;
                        obj5 = { powerup: null };
                        obj5.powerup = arr2[0];
                        obj.perk1 = jsx(f63859, obj5);
                        obj6 = { powerup: null };
                        obj6.powerup = arr2[1];
                        obj.perk2 = jsx(f63859, obj6);
                        formatResult = intl.format(tmp7(tmp8[15]).MNO3sG, obj);
                      }
                      return formatResult;
                    }
                  }
                  return "";
                }
              }
              return tmp16;
            }
            let obj4 = { style: container, children: tmp13 };
            const tmp19 = <View style={container}>{tmp13}</View>;
            cResult[10] = tmp4.container;
            cResult[11] = tmp13;
            cResult[12] = tmp19;
            tmp16 = tmp19;
          }
          const obj5 = { style: text, variant: "text-sm/semibold", children: tmp11 };
          const tmp15 = jsx(tmp(4892).Text, { style: text, variant: "text-sm/semibold", children: tmp11 });
          cResult[7] = tmp4.text;
          cResult[8] = tmp11;
          cResult[9] = tmp15;
        }
      }
      let obj = guild(576);
      tmp = guild;
    }
  : (guild) => {
      guild = guild.guild;
      const tmp = closure_7();
      const arr = useMarketablePowerupPerksDefault(guild.id);
      const items = [guild.id];
      const effect = noop.useEffect(() => {
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guild.id)) {
          const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guild.id);
        }
      }, items);
      if (useHasAllocateBoostPermissionDefault(guild.id)) {
        let num;
        if (arr != null) {
          num = arr.length;
        }
        if (num == null) {
          num = 0;
        }
        if (0 !== num) {
          let obj = { style: tmp.container, children: null };
          const obj2 = { style: tmp.text, variant: "text-sm/semibold", children: null };
          const intl = guild(1126).intl;
          let str2 = "";
          if (null != arr) {
            str2 = "";
            if (0 !== arr.length) {
              let first = orderMarketablePerksForDisplayDefault(arr);
              if (1 === first.length) {
                const obj3 = { powerup: null };
                first = first[0];
                obj3.powerup = first;
                let formatResult = <closure_8 powerup={null} />;
              } else {
                const intl2 = guild(1126).intl;
                const obj4 = { perk1: null, perk2: null };
                const obj5 = { powerup: first[0] };
                obj4.perk1 = <closure_8 powerup={first[0]} />;
                const obj6 = { powerup: first[1] };
                obj4.perk2 = <closure_8 powerup={first[1]} />;
                formatResult = intl2.format(_modDef2553.MNO3sG, obj4);
              }
            }
          }
          const obj7 = { perks: str2 };
          obj2.children = intl.format(_modDef2553["7lwpzR"], obj7);
          obj.children = jsx(guild(4892).Text, { style: tmp.text, variant: "text-sm/semibold", children: null });
          return <View style={tmp.container}>{null}</View>;
        }
      }
    };
