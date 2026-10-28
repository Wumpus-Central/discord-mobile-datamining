// === Module 12788: GameOrganizationLinkedServerCard ===

// Module 12788 (GameOrganizationLinkedServerCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import Text_Text from "Text/Text" /* 5270 */;
import Stack_Stack from "Stack/Stack" /* 6013 */;
import GuildIcon from "GuildIcon" /* 6919 */;
import Card from "Card" /* 6941 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const XLARGE = fn(6919).GuildIconSizes.XLARGE;
const createStyles = fn(5004);
let obj2 = { card: { padding: nativeDefault.space.PX_16 }, icon: null, info: null, autoWidth: null, dot: null, onlineDot: null, membersDot: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.icon = { borderRadius: nativeDefault.radii.lg };
obj2.info = { flex: 1 };
obj2.autoWidth = { width: "auto" };
let size = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
obj2.dot = size;
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.onlineDot = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let obj5 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.membersDot = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.TEXT_MUTED };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationLinkedServerCard(linkedGuild) {
  const cResult = c.c(33);
  ({ id, name, icon, presenceCount, memberCount } = linkedGuild.linkedGuild);
  const tmp4 = closure_7();
  if (cResult[0] === id) {
    if (cResult[1] === icon) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === name) {
        if (cResult[5] === tmp4.icon) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] !== name) {
          const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
          const tmp14 = React4(Text_Text.Text, obj3);
          cResult[7] = name;
          cResult[8] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === presenceCount) {
          if (cResult[10] === tmp4.autoWidth) {
            if (cResult[11] === tmp4.dot) {
              if (cResult[12] === tmp4.onlineDot) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] === memberCount) {
                if (cResult[15] === tmp4.autoWidth) {
                  if (cResult[16] === tmp4.dot) {
                    if (cResult[17] === tmp4.membersDot) {
                      let tmp21 = cResult[18];
                    }
                    if (cResult[19] === tmp4.autoWidth) {
                      if (cResult[20] === tmp15) {
                        if (cResult[21] === tmp21) {
                          let tmp27 = cResult[22];
                        }
                        if (cResult[23] === tmp4.info) {
                          if (cResult[24] === tmp12) {
                            if (cResult[25] === tmp27) {
                              let tmp31 = cResult[26];
                            }
                            if (cResult[27] === tmp7) {
                              if (cResult[28] === tmp31) {
                                let tmp35 = cResult[29];
                              }
                              if (cResult[30] === tmp4.card) {
                                if (cResult[31] === tmp35) {
                                  let tmp39 = cResult[32];
                                }
                                return tmp39;
                              }
                              const obj4 = { border: "subtle", style: tmp4.card, children: tmp35 };
                              const tmp41 = React4(Card.Card, obj4);
                              cResult[30] = tmp4.card;
                              cResult[31] = tmp35;
                              cResult[32] = tmp41;
                              tmp39 = tmp41;
                            }
                            const obj5 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: null };
                            const items = [tmp7, tmp31];
                            obj5.children = items;
                            const tmp38 = hasOwnProperty(Stack_Stack.Stack, obj5);
                            cResult[27] = tmp7;
                            cResult[28] = tmp31;
                            cResult[29] = tmp38;
                            tmp35 = tmp38;
                          }
                        }
                        const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.info, children: null };
                        const items1 = [tmp12, tmp27];
                        obj6.children = items1;
                        const tmp34 = hasOwnProperty(Stack_Stack.Stack, obj6);
                        cResult[23] = tmp4.info;
                        cResult[24] = tmp12;
                        cResult[25] = tmp27;
                        cResult[26] = tmp34;
                        tmp31 = tmp34;
                      }
                    }
                    const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp4.autoWidth, children: null };
                    const items2 = [tmp15, tmp21];
                    obj7.children = items2;
                    const tmp30 = hasOwnProperty(Stack_Stack.Stack, obj7);
                    cResult[19] = tmp4.autoWidth;
                    cResult[20] = tmp15;
                    cResult[21] = tmp21;
                    cResult[22] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              let tmp22 = null;
              if (null != memberCount) {
                const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.autoWidth, children: null };
                const obj9 = { style: null };
                const items3 = [, ];
                ({ dot: arr3[0], membersDot: arr3[1] } = tmp4);
                obj9.style = items3;
                const items4 = [React4(View, obj9), ];
                const obj10 = { variant: "text-md/medium", color: "text-muted", children: null };
                const intl2 = util.intl;
                const obj11 = { count: memberCount };
                obj10.children = intl2.formatToPlainString(util.t.zRl6XR, obj11);
                items4[1] = React4(Text_Text.Text, obj10);
                obj8.children = items4;
                tmp22 = hasOwnProperty(Stack_Stack.Stack, obj8);
              }
              cResult[14] = memberCount;
              cResult[15] = tmp4.autoWidth;
              cResult[16] = tmp4.dot;
              cResult[17] = tmp4.membersDot;
              cResult[18] = tmp22;
              tmp21 = tmp22;
            }
          }
        }
        let tmp16 = null;
        if (null != presenceCount) {
          const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp4.autoWidth, children: null };
          const obj13 = { style: null };
          const items5 = [, ];
          ({ dot: arr[0], onlineDot: arr[1] } = tmp4);
          obj13.style = items5;
          const items6 = [React4(View, obj13), ];
          const obj14 = { variant: "text-md/medium", color: "text-muted", children: null };
          const intl = util.intl;
          const obj15 = { membersOnline: presenceCount };
          obj14.children = intl.formatToPlainString(util.t["LC+S+m"], obj15);
          items6[1] = React4(Text_Text.Text, obj14);
          obj12.children = items6;
          tmp16 = hasOwnProperty(Stack_Stack.Stack, obj12);
        }
        cResult[9] = presenceCount;
        cResult[10] = tmp4.autoWidth;
        cResult[11] = tmp4.dot;
        cResult[12] = tmp4.onlineDot;
        cResult[13] = tmp16;
        tmp15 = tmp16;
      }
    }
    const obj16 = { icon: tmp5, value: name, size: XLARGE, selected: false, style: tmp4.icon };
    const tmp11 = React4(GuildIconDefault, obj16);
    cResult[3] = tmp5;
    cResult[4] = name;
    cResult[5] = tmp4.icon;
    cResult[6] = tmp11;
    tmp7 = tmp11;
  }
  const obj2 = AvatarUtilsDefault;
  const guildIconURL = obj2.getGuildIconURL({ id, icon, size: GuildIcon.ImageSizes[XLARGE] });
  cResult[0] = id;
  cResult[1] = icon;
  cResult[2] = guildIconURL;
  tmp5 = guildIconURL;
  const obj17 = { id, icon, size: GuildIcon.ImageSizes[XLARGE] };
}) : (function GameOrganizationLinkedServerCard(linkedGuild) {
  linkedGuild = linkedGuild.linkedGuild;
  ({ name, presenceCount, memberCount } = linkedGuild);
  ({ id, icon } = linkedGuild);
  const tmp = closure_7();
  const obj = AvatarUtilsDefault;
  const guildIconURL = obj.getGuildIconURL({ id, icon, size: GuildIcon.ImageSizes[XLARGE] });
  const obj3 = { border: "subtle", style: tmp.card, children: null };
  const obj4 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: null };
  const items = [React4(GuildIconDefault, { icon: guildIconURL, value: name, size: XLARGE, selected: false, style: tmp.icon }), ];
  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  const obj7 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_20, style: tmp.autoWidth, children: null };
  let tmp7Result = null;
  if (null != presenceCount) {
    const obj8 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: null };
    const obj9 = { style: null };
    const items2 = [, ];
    ({ dot: arr3[0], onlineDot: arr3[1] } = tmp);
    obj9.style = items2;
    const items3 = [React4(View, obj9), ];
    const obj10 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const obj11 = { membersOnline: presenceCount };
    obj10.children = intl.formatToPlainString(util.t["LC+S+m"], obj11);
    items3[1] = React4(Text_Text.Text, obj10);
    obj8.children = items3;
    tmp7Result = hasOwnProperty(Stack_Stack.Stack, obj8);
  }
  const items4 = [tmp7Result, ];
  let tmp7Result2 = null;
  if (null != memberCount) {
    const obj12 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_6, style: tmp.autoWidth, children: null };
    const obj13 = { style: null };
    const items5 = [, ];
    ({ dot: arr6[0], membersDot: arr6[1] } = tmp);
    obj13.style = items5;
    const items6 = [React4(View, obj13), ];
    const obj14 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj15 = { count: memberCount };
    obj14.children = intl2.formatToPlainString(util.t.zRl6XR, obj15);
    items6[1] = React4(Text_Text.Text, obj14);
    obj12.children = items6;
    tmp7Result2 = hasOwnProperty(Stack_Stack.Stack, obj12);
  }
  items4[1] = tmp7Result2;
  obj7.children = items4;
  items1[1] = hasOwnProperty(Stack_Stack.Stack, obj7);
  obj6.children = items1;
  items[1] = hasOwnProperty(Stack_Stack.Stack, obj6);
  obj4.children = items;
  obj3.children = hasOwnProperty(Stack_Stack.Stack, obj4);
  return React4(Card.Card, obj3);
});