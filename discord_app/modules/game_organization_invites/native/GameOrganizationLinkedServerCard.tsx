// discord_app/modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import GameOrganizationIconDefault from "GameOrganizationIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4969);
let obj2 = {
  card: { padding: nativeDefault.space.PX_16 },
  info: { flex: 1 },
  countsRow: { width: "auto" },
  count: { width: "auto" },
  onlineDot: null,
  membersDot: null,
};
let size = {
  width: nativeDefault.space.PX_12,
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
obj2.onlineDot = size;
const size1 = {
  width: nativeDefault.space.PX_12,
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_MUTED,
};
obj2.membersDot = size1;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationLinkedServerCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameOrganizationLinkedServerCard(arg0) {
      const cResult = c.c(26);
      ({ name, iconUrl, presenceCount, memberCount } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== iconUrl) {
        const obj2 = { iconUrl, size: 56, borderRadius: nativeDefault.radii.lg };
        const tmp9 = React4(GameOrganizationIconDefault, obj2);
        cResult[0] = iconUrl;
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== name) {
        const obj3 = {
          variant: "text-lg/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: name,
        };
        const tmp12 = React4(Text_Text.Text, obj3);
        cResult[2] = name;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === presenceCount) {
        if (cResult[5] === tmp4.count) {
          if (cResult[6] === tmp4.onlineDot) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] === memberCount) {
            if (cResult[9] === tmp4.count) {
              if (cResult[10] === tmp4.membersDot) {
                let tmp19 = cResult[11];
              }
              if (cResult[12] === tmp4.countsRow) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp19) {
                    let tmp25 = cResult[15];
                  }
                  if (cResult[16] === tmp4.info) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp25) {
                        let tmp29 = cResult[19];
                      }
                      if (cResult[20] === tmp5) {
                        if (cResult[21] === tmp29) {
                          let tmp33 = cResult[22];
                        }
                        if (cResult[23] === tmp4.card) {
                          if (cResult[24] === tmp33) {
                            let tmp37 = cResult[25];
                          }
                          return tmp37;
                        }
                        const obj4 = { border: "subtle", style: tmp4.card, children: tmp33 };
                        const tmp39 = React4(Card.Card, obj4);
                        cResult[23] = tmp4.card;
                        cResult[24] = tmp33;
                        cResult[25] = tmp39;
                        tmp37 = tmp39;
                      }
                      const obj5 = {
                        direction: "horizontal",
                        align: "center",
                        spacing: nativeDefault.space.PX_16,
                        children: null,
                      };
                      const items = [tmp5, tmp29];
                      obj5.children = items;
                      const tmp36 = hasOwnProperty(Stack_Stack.Stack, obj5);
                      cResult[20] = tmp5;
                      cResult[21] = tmp29;
                      cResult[22] = tmp36;
                      tmp33 = tmp36;
                    }
                  }
                  const obj6 = { spacing: nativeDefault.space.PX_4, style: tmp4.info, children: null };
                  const items1 = [tmp10, tmp25];
                  obj6.children = items1;
                  const tmp32 = hasOwnProperty(Stack_Stack.Stack, obj6);
                  cResult[16] = tmp4.info;
                  cResult[17] = tmp10;
                  cResult[18] = tmp25;
                  cResult[19] = tmp32;
                  tmp29 = tmp32;
                }
              }
              const obj7 = {
                direction: "horizontal",
                align: "center",
                spacing: nativeDefault.space.PX_20,
                style: tmp4.countsRow,
                children: null,
              };
              const items2 = [tmp13, tmp19];
              obj7.children = items2;
              const tmp28 = hasOwnProperty(Stack_Stack.Stack, obj7);
              cResult[12] = tmp4.countsRow;
              cResult[13] = tmp13;
              cResult[14] = tmp19;
              cResult[15] = tmp28;
              tmp25 = tmp28;
            }
          }
          let tmp20 = null;
          if (null != memberCount) {
            const obj8 = {
              direction: "horizontal",
              align: "center",
              spacing: nativeDefault.space.PX_6,
              style: tmp4.count,
              children: null,
            };
            const obj9 = { style: tmp4.membersDot };
            const items3 = [React4(View, obj9)];
            const obj10 = { variant: "text-md/medium", color: "text-muted", children: null };
            const intl2 = util.intl;
            const obj11 = { count: memberCount };
            obj10.children = intl2.formatToPlainString(util.t.zRl6XR, obj11);
            items3[1] = React4(Text_Text.Text, obj10);
            obj8.children = items3;
            tmp20 = hasOwnProperty(Stack_Stack.Stack, obj8);
          }
          cResult[8] = memberCount;
          cResult[9] = tmp4.count;
          cResult[10] = tmp4.membersDot;
          cResult[11] = tmp20;
          tmp19 = tmp20;
        }
      }
      let tmp14 = null;
      if (null != presenceCount) {
        const obj12 = {
          direction: "horizontal",
          align: "center",
          spacing: nativeDefault.space.PX_6,
          style: tmp4.count,
          children: null,
        };
        const obj13 = { style: tmp4.onlineDot };
        const items4 = [React4(View, obj13)];
        const obj14 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl = util.intl;
        const obj15 = { membersOnline: presenceCount };
        obj14.children = intl.formatToPlainString(util.t["LC+S+m"], obj15);
        items4[1] = React4(Text_Text.Text, obj14);
        obj12.children = items4;
        tmp14 = hasOwnProperty(Stack_Stack.Stack, obj12);
      }
      cResult[4] = presenceCount;
      cResult[5] = tmp4.count;
      cResult[6] = tmp4.onlineDot;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : function GameOrganizationLinkedServerCard(arg0) {
      ({ presenceCount, memberCount } = arg0);
      ({ name, iconUrl } = arg0);
      const tmp = closure_6();
      const obj = { border: "subtle", style: tmp.card, children: null };
      const obj2 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_16, children: null };
      const obj3 = { iconUrl, size: 56, borderRadius: nativeDefault.radii.lg };
      const items = [React4(GameOrganizationIconDefault, obj3)];
      const obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.info, children: null };
      const items1 = [
        React4(Text_Text.Text, {
          variant: "text-lg/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: name,
        }),
      ];
      const obj5 = {
        direction: "horizontal",
        align: "center",
        spacing: nativeDefault.space.PX_20,
        style: tmp.countsRow,
        children: null,
      };
      let tmp5Result = null;
      if (null != presenceCount) {
        const obj6 = {
          direction: "horizontal",
          align: "center",
          spacing: nativeDefault.space.PX_6,
          style: tmp.count,
          children: null,
        };
        const obj7 = { style: tmp.onlineDot };
        const items2 = [React4(View, obj7)];
        const obj8 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl = util.intl;
        const obj9 = { membersOnline: presenceCount };
        obj8.children = intl.formatToPlainString(util.t["LC+S+m"], obj9);
        items2[1] = React4(Text_Text.Text, obj8);
        obj6.children = items2;
        tmp5Result = hasOwnProperty(Stack_Stack.Stack, obj6);
      }
      const items3 = [tmp5Result];
      let tmp5Result2 = null;
      if (null != memberCount) {
        const obj10 = {
          direction: "horizontal",
          align: "center",
          spacing: nativeDefault.space.PX_6,
          style: tmp.count,
          children: null,
        };
        const obj11 = { style: tmp.membersDot };
        const items4 = [React4(View, obj11)];
        const obj12 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl2 = util.intl;
        const obj13 = { count: memberCount };
        obj12.children = intl2.formatToPlainString(util.t.zRl6XR, obj13);
        items4[1] = React4(Text_Text.Text, obj12);
        obj10.children = items4;
        tmp5Result2 = hasOwnProperty(Stack_Stack.Stack, obj10);
      }
      items3[1] = tmp5Result2;
      obj5.children = items3;
      items1[1] = hasOwnProperty(Stack_Stack.Stack, obj5);
      obj4.children = items1;
      items[1] = hasOwnProperty(Stack_Stack.Stack, obj4);
      obj2.children = items;
      obj.children = hasOwnProperty(Stack_Stack.Stack, obj2);
      return React4(Card.Card, obj);
    };
