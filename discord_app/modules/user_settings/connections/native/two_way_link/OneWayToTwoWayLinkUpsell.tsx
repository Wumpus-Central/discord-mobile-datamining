// discord_app/modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SelectedDismissibleContentDefault from "../../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    margin: 16,
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
  },
  header: { flexDirection: "row", marginBottom: 4, alignItems: "center" },
  titleContainer: { flexGrow: 1, flexShrink: 1 },
  title: null,
  body: null,
  newContainer: null,
  reconnectButton: null,
};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.title = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.body = {};
obj2.newContainer = { paddingHorizontal: 6, width: "auto", alignSelf: "flex-start", marginBottom: 4 };
obj2.reconnectButton = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OneWayToTwoWayNewTag(markAsDismissed) {
      const cResult = markAsDismissed(576).c(5);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_8();
      if (cResult[0] !== markAsDismissed) {
        const fn = function o() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        };
        const items = [markAsDismissed];
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== tmp4.newContainer) {
        const obj2 = { containerStyle: tmp4.newContainer, variant: "text-xs/bold" };
        const tmp10 = closure_6(markAsDismissed(1200).NewTag, obj2);
        cResult[3] = tmp4.newContainer;
        cResult[4] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : function OneWayToTwoWayNewTag(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const items = [markAsDismissed];
      const effect = noop.useEffect(() => markAsDismissed(ContentDismissActionType.UNKNOWN), items);
      const tmp = closure_8();
      return closure_6(markAsDismissed(1200).NewTag, {
        containerStyle: closure_8().newContainer,
        variant: "text-xs/bold",
      });
    };
ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  margin: 16,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
};
let obj4 = {};
let obj5 = {};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/OneWayToTwoWayLinkUpsell.tsx",
);

export const OneWayToTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled()
  ? function OneWayToTwoWayLinkUpsell(onPress) {
      const cResult = newIndicatorDismissibleContent(576).c(27);
      ({ title, body, img, newIndicatorDismissibleContent } = onPress);
      onPress = onPress.onPress;
      const tmp4 = closure_8();
      if (cResult[0] !== newIndicatorDismissibleContent) {
        const obj2 = { contentTypes: null, children: null };
        const items = [newIndicatorDismissibleContent];
        obj2.contentTypes = items;
        obj2.children = function children(visibleContent) {
          let tmp2 = null;
          if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
            const obj = { markAsDismissed: tmp };
            tmp2 = timestampProducer(closure_9, obj);
          }
          return tmp2;
        };
        const tmp8 = closure_6(SelectedDismissibleContentDefault, obj2);
        cResult[0] = newIndicatorDismissibleContent;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.title) {
        if (cResult[3] === title) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.titleContainer) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp9) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === img) {
              if (cResult[10] === tmp4.header) {
                if (cResult[11] === tmp11) {
                  let tmp15 = cResult[12];
                }
                if (cResult[13] === body) {
                  if (cResult[14] === tmp4.body) {
                    let tmp19 = cResult[15];
                  }
                  const _Symbol = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = newIndicatorDismissibleContent(1126).intl;
                    const stringResult = intl.string(newIndicatorDismissibleContent(1126).t.vD60Pv);
                    cResult[16] = stringResult;
                    let tmp23 = stringResult;
                  } else {
                    tmp23 = cResult[16];
                  }
                  if (cResult[17] !== onPress) {
                    const obj3 = { text: tmp23, onPress };
                    const tmp27 = closure_6(newIndicatorDismissibleContent(5376).Button, obj3);
                    cResult[17] = onPress;
                    cResult[18] = tmp27;
                    let tmp25 = tmp27;
                  } else {
                    tmp25 = cResult[18];
                  }
                  if (cResult[19] === tmp4.reconnectButton) {
                    if (cResult[20] === tmp25) {
                      let tmp28 = cResult[21];
                    }
                    if (cResult[22] === tmp4.container) {
                      if (cResult[23] === tmp28) {
                        if (cResult[24] === tmp15) {
                          if (cResult[25] === tmp19) {
                            let tmp32 = cResult[26];
                          }
                          return tmp32;
                        }
                      }
                    }
                    const obj4 = { style: tmp4.container, children: null };
                    const items1 = [tmp15, tmp19, tmp28];
                    obj4.children = items1;
                    const tmp35 = closure_7(View, obj4);
                    cResult[22] = tmp4.container;
                    cResult[23] = tmp28;
                    cResult[24] = tmp15;
                    cResult[25] = tmp19;
                    cResult[26] = tmp35;
                    tmp32 = tmp35;
                  }
                  const obj5 = { style: tmp4.reconnectButton, children: tmp25 };
                  const tmp31 = closure_6(View, obj5);
                  cResult[19] = tmp4.reconnectButton;
                  cResult[20] = tmp25;
                  cResult[21] = tmp31;
                  tmp28 = tmp31;
                }
                const obj6 = { style: tmp4.body, variant: "text-sm/medium", children: body };
                const tmp21 = closure_6(newIndicatorDismissibleContent(5087).Text, obj6);
                cResult[13] = body;
                cResult[14] = tmp4.body;
                cResult[15] = tmp21;
                tmp19 = tmp21;
              }
            }
            const obj7 = { style: tmp4.header, children: null };
            const items2 = [tmp11, img];
            obj7.children = items2;
            const tmp18 = closure_7(View, obj7);
            cResult[9] = img;
            cResult[10] = tmp4.header;
            cResult[11] = tmp11;
            cResult[12] = tmp18;
            tmp15 = tmp18;
          }
        }
        const obj8 = { style: tmp4.titleContainer, children: null };
        const items3 = [tmp5, tmp9];
        obj8.children = items3;
        const tmp14 = closure_7(View, obj8);
        cResult[5] = tmp4.titleContainer;
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = closure_6(newIndicatorDismissibleContent(5087).Text, {
        style: tmp4.title,
        variant: "text-md/semibold",
        children: title,
      });
      cResult[2] = tmp4.title;
      cResult[3] = title;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      let obj = newIndicatorDismissibleContent(576);
      const obj9 = { style: tmp4.title, variant: "text-md/semibold", children: title };
    }
  : function OneWayToTwoWayLinkUpsell(newIndicatorDismissibleContent) {
      newIndicatorDismissibleContent = newIndicatorDismissibleContent.newIndicatorDismissibleContent;
      ({ title, body, img, onPress } = newIndicatorDismissibleContent);
      const tmp = closure_8();
      let obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.header, children: null };
      const obj3 = { style: tmp.titleContainer, children: null };
      const obj4 = {
        contentTypes: null,
        children(visibleContent) {
          let tmp2 = null;
          if (visibleContent.visibleContent === newIndicatorDismissibleContent) {
            const obj = { markAsDismissed: tmp };
            tmp2 = timestampProducer(closure_9, obj);
          }
          return tmp2;
        },
      };
      const items = [newIndicatorDismissibleContent];
      obj4.contentTypes = items;
      const items1 = [
        closure_6(SelectedDismissibleContentDefault, obj4),
        closure_6(newIndicatorDismissibleContent(5087).Text, {
          style: tmp.title,
          variant: "text-md/semibold",
          children: title,
        }),
      ];
      obj3.children = items1;
      const items2 = [closure_7(View, obj3), img];
      obj2.children = items2;
      const items3 = [
        closure_7(View, obj2),
        closure_6(newIndicatorDismissibleContent(5087).Text, {
          style: tmp.body,
          variant: "text-sm/medium",
          children: body,
        }),
      ];
      const obj7 = { style: tmp.reconnectButton, children: null };
      const obj8 = { text: null, onPress: null };
      const intl = newIndicatorDismissibleContent(1126).intl;
      obj8.text = intl.string(newIndicatorDismissibleContent(1126).t.vD60Pv);
      obj8.onPress = onPress;
      obj7.children = closure_6(newIndicatorDismissibleContent(5376).Button, obj8);
      items3[2] = closure_6(View, obj7);
      obj.children = items3;
      return closure_7(View, obj);
    };
