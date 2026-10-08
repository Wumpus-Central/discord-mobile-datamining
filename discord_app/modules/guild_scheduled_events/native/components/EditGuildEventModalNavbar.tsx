// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import _modDef5009 from "../../../../../_runtime/metro/05009__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  headerTitle: { lineHeight: 28, textTransform: "uppercase" },
  buttonContainer: { width: 60 },
  rightButton: { marginLeft: 12 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EditGuildEventModalNavbar(arg0) {
      const cResult = c.c(40);
      ({ screen, onClose } = arg0);
      const tmp4 = closure_7();
      variant = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "EditGuildEventModalNavbar",
        "text-xs/bold",
      );
      if (cResult[0] === variant.style) {
        if (cResult[1] === variant.variant) {
          if (cResult[2] === screen) {
            if (cResult[3] === tmp4.buttonContainer) {
              if (cResult[4] === tmp4.header) {
                if (cResult[5] === tmp4.headerTitle) {
                  if (cResult[20] === cResult[6]) {
                    if (cResult[21] === tmp7) {
                      if (cResult[22] === tmp8) {
                        if (cResult[23] === tmp9) {
                          if (cResult[24] === tmp10) {
                            let tmp31 = cResult[25];
                          }
                          const _Symbol = Symbol;
                          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl2 = util.intl;
                            const stringResult = intl2.string(util.t.cpT0Cq);
                            cResult[26] = stringResult;
                            let tmp35 = stringResult;
                          } else {
                            tmp35 = cResult[26];
                          }
                          if (cResult[27] === onClose) {
                            if (cResult[28] === tmp4.rightButton) {
                              let tmp37 = cResult[29];
                            }
                            if (cResult[30] === tmp4.buttonContainer) {
                              if (cResult[31] === tmp37) {
                                let tmp41 = cResult[32];
                              }
                              if (cResult[33] === tmp6) {
                                if (cResult[34] === tmp41) {
                                  if (cResult[35] === tmp11) {
                                    if (cResult[36] === tmp12) {
                                      if (cResult[37] === tmp13) {
                                        if (cResult[38] === tmp31) {
                                          let tmp45 = cResult[39];
                                        }
                                        return tmp45;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj3 = { top: tmp11, style: tmp12, children: null };
                              const items = [tmp13, tmp31, tmp41];
                              obj3.children = items;
                              const tmp47 = timestampProducer(tmp6, obj3);
                              cResult[33] = tmp6;
                              cResult[34] = tmp41;
                              cResult[35] = tmp11;
                              cResult[36] = tmp12;
                              cResult[37] = tmp13;
                              cResult[38] = tmp31;
                              cResult[39] = tmp47;
                              tmp45 = tmp47;
                            }
                            const obj4 = { style: tmp4.buttonContainer, children: tmp37 };
                            const tmp44 = hasOwnProperty(View, obj4);
                            cResult[30] = tmp4.buttonContainer;
                            cResult[31] = tmp37;
                            cResult[32] = tmp44;
                            tmp41 = tmp44;
                          }
                          const obj5 = {
                            accessibilityLabel: tmp35,
                            onPress: onClose,
                            source: _modDef5009,
                            style: tmp4.rightButton,
                          };
                          const tmp40 = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj5);
                          cResult[27] = onClose;
                          cResult[28] = tmp4.rightButton;
                          cResult[29] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                    }
                  }
                  const obj6 = { style: cResult[8], variant: cResult[9], color: cResult[10], children: cResult[11] };
                  const tmp33 = hasOwnProperty(cResult[6], obj6);
                  cResult[20] = cResult[6];
                  cResult[21] = cResult[8];
                  cResult[22] = cResult[9];
                  cResult[23] = cResult[10];
                  cResult[24] = cResult[11];
                  cResult[25] = tmp33;
                  tmp31 = tmp33;
                }
              }
            }
          }
        }
      }
      if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
        let items1 = [1, 3];
      } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
        items1 = [2, 3];
      } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
        items1 = [3, 3];
      } else {
        GlobalUtils.assertNever(screen);
        const tmpResult = GlobalUtils;
      }
      let num = 2;
      [tmp16, tmp17] = items1;
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      const header = tmp4.header;
      if (cResult[15] !== tmp4.buttonContainer) {
        const obj7 = { style: tmp4.buttonContainer };
        const tmp21 = hasOwnProperty(View, obj7);
        cResult[15] = tmp4.buttonContainer;
        cResult[16] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[16];
      }
      const Text = Text_Text.Text;
      if (cResult[17] === variant.style) {
        if (cResult[18] === tmp4.headerTitle) {
          let tmp22 = cResult[19];
        }
        const variant2 = variant.variant;
        const intl = util.intl;
        const obj8 = { step: tmp16, total: tmp17 };
        const formatResult = intl.format(util.t["42HaFY"], obj8);
        ({ style: tmp3[0], variant } = variant);
        cResult[1] = variant;
        cResult[num] = screen;
        cResult[3] = tmp4.buttonContainer;
        cResult[4] = tmp4.header;
        cResult[5] = tmp4.headerTitle;
        cResult[6] = Text;
        cResult[7] = SafeAreaPaddingView;
        cResult[8] = tmp22;
        cResult[9] = variant2;
        screen = "text-default";
        cResult[10] = "text-default";
        cResult[11] = formatResult;
        cResult[12] = true;
        cResult[13] = header;
        num = 14;
        cResult[14] = tmp18;
      }
      const items2 = [tmp4.headerTitle, variant.style];
      cResult[17] = variant.style;
      cResult[18] = tmp4.headerTitle;
      cResult[19] = items2;
      tmp22 = items2;
      const tmp15 = _slicedToArray(items1, 2);
    }
  : function EditGuildEventModalNavbar(screen) {
      screen = screen.screen;
      const tmp = closure_7();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "EditGuildEventModalNavbar",
        "text-xs/bold",
      );
      if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
        let items = [1, 3];
      } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
        items = [2, 3];
      } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
        items = [3, 3];
      } else {
        GlobalUtils.assertNever(screen);
        const tmp2Result = GlobalUtils;
      }
      [tmp7, tmp8] = items;
      const obj2 = { top: true, style: tmp.header, children: null };
      const items1 = [hasOwnProperty(View, { style: tmp.buttonContainer }), ,];
      const obj4 = { style: null, variant: typeConsolidationEyebrow.variant, color: "text-default", children: null };
      const items2 = [tmp.headerTitle, typeConsolidationEyebrow.style];
      obj4.style = items2;
      const intl = util.intl;
      obj4.children = intl.format(util.t["42HaFY"], { step: tmp7, total: tmp8 });
      items1[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = { style: tmp.buttonContainer, children: null };
      const obj6 = { accessibilityLabel: null, onPress: null, source: null, style: null };
      const intl2 = util.intl;
      obj6.accessibilityLabel = intl2.string(util.t.cpT0Cq);
      obj6.onPress = screen.onClose;
      obj6.source = _modDef5009;
      obj6.style = tmp.rightButton;
      obj5.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj6);
      items1[2] = hasOwnProperty(View, obj5);
      obj2.children = items1;
      return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
    };
