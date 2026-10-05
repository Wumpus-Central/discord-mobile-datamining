// discord_app/modules/create_guild/native/components/CreationIntent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import react_native from "../../../a11y/native/setAccessibilityFocus.android.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import NewUserAnalyticsUtils from "../../../nuf/native/NewUserAnalyticsUtils.tsx";
import ChairIllocon from "../../../../design/components/mana-assets/native/generated/ChairIllocon.native.tsx";
import WorldIllocon from "../../../../design/components/mana-assets/native/generated/WorldIllocon.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native2 from "../../../../../_runtime/00017_react-native.js";
import CreateGuildConstants from "../CreateGuildConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, navigation;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native2);
({
  CreateGuildModalStates: metroRequire,
  GuildTemplateTriggers: metroImportDefault,
  NUXGuildTemplatesAnalytics: metroImportAll,
} = CreateGuildConstants);
({ AnalyticEvents: c9, AnalyticsLocations: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  contentContainer: obj2,
  scrollContainer: obj3,
  headerContainer: { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 },
  headerTitle: { textAlign: "center", marginBottom: 8 },
  headerDescription: { lineHeight: 18, textAlign: "center" },
  sections: obj4,
  skipDescription: { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" },
};
obj2 = { flex: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_13 = createStyles(obj);
let closure_14 = Math.random() < 0.5;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildTemplate) => {
      let contentContainer;
      let headerContainer;
      let headerTitle;
      let intl4;
      let intl6;
      let items4;
      let items5;
      let scrollContainer;
      let tmp11;
      let tmp12;
      let tmp8;
      let tmp9;
      let tmp = guildTemplate;
      const tmp2 = navigation;
      let obj = guildTemplate(navigation[9]);
      const cResult = obj.c(38);
      guildTemplate = guildTemplate.guildTemplate;
      const trigger = guildTemplate.trigger;
      const tmp4 = closure_13();
      let obj2 = guildTemplate(navigation[10]);
      navigation = obj2.useNavigation();
      let obj3 = guildTemplate(navigation[11]);
      const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
      let obj4 = isScreenReaderEnabled;
      const ref = isScreenReaderEnabled.useRef(null);
      if (cResult[0] !== isScreenReaderEnabled) {
        const fn = function o() {
          const tmp = isScreenReaderEnabled && null != ref.current;
          if (tmp) {
            const obj2 = { ref, delay: 100 };
            const obj = react_native;
            const result = obj.setAccessibilityFocus(obj2);
          }
        };
        const items = [isScreenReaderEnabled];
        cResult[0] = isScreenReaderEnabled;
        cResult[1] = fn;
        cResult[2] = items;
        tmp9 = items;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = obj4.useEffect(tmp8, tmp9);
      if (cResult[3] !== trigger) {
        const fn2 = function h() {
          if (metroImportDefault.NUF === trigger) {
            const obj2 = NewUserAnalyticsUtils;
            obj2.trackNUFStep(metroImportAll.STEP_GUILD_TEMPLATE, metroImportAll.STEP_CREATION_INTENT, { skip: false });
          } else if (tmp2.IN_APP === tmp) {
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.OPEN_MODAL, { type: "Server Intent Discovery" });
          }
        };
        const items1 = [trigger];
        cResult[3] = trigger;
        cResult[4] = fn2;
        cResult[5] = items1;
        tmp12 = items1;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const effect1 = obj4.useEffect(tmp11, tmp12);
      if (cResult[6] === guildTemplate) {
        if (cResult[7] === navigation) {
          let tmp14;
          let tmp16;
          let tmp18;
          let tmp21;
          let tmp23;
          if (cResult[8] === trigger) {
            tmp14 = cResult[9];
          }
          let closure_5 = tmp14;
          const _Symbol = Symbol;
          ({ contentContainer, scrollContainer, headerContainer, headerTitle } = tmp4);
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[15]).intl;
            const stringResult = intl.string(tmp(tmp2[15]).t.f3MvGS);
            cResult[10] = stringResult;
            tmp16 = stringResult;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] !== tmp4.headerTitle) {
            let obj5 = {
              ref,
              style: headerTitle,
              accessibilityRole: "header",
              variant: "heading-xl/extrabold",
              color: "mobile-text-heading-primary",
              children: tmp16,
            };
            const tmp20 = closure_11(tmp(tmp2[16]).Text, obj5);
            cResult[11] = tmp4.headerTitle;
            cResult[12] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[12];
          }
          const _Symbol2 = Symbol;
          const headerDescription = tmp4.headerDescription;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[15]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[15]).t.nOzc7w);
            cResult[13] = stringResult1;
            tmp21 = stringResult1;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== tmp4.headerDescription) {
            let obj6 = { style: headerDescription, variant: "text-sm/medium", color: "text-default", children: tmp21 };
            const tmp25 = closure_11(tmp(tmp2[16]).Text, obj6);
            cResult[14] = tmp4.headerDescription;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] === tmp4.headerContainer) {
            if (cResult[17] === tmp18) {
              let tmp26;
              let tmp30;
              if (cResult[18] === tmp23) {
                tmp26 = cResult[19];
              }
              if (cResult[20] !== tmp14) {
                let tmp37;
                const obj7 = { hasIcons: true, children: null };
                const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
                const tmp35 = trigger(tmp2[18]);
                const obj8 = { Icon: null, message: null, onPress: null };
                if (closure_14) {
                  obj8.Icon = tmp(tmp2[19]).ChairIllocon;
                  const intl5 = tmp(tmp2[15]).intl;
                  obj8.message = intl5.string(tmp(tmp2[15]).t.uE7zcu);
                  obj8.onPress = function onPress() {
                    return closure_5(false);
                  };
                  const items2 = [closure_11(tmp35, obj8)];
                  const obj9 = {
                    Icon: tmp(tmp2[20]).WorldIllocon,
                    message: intl6.string(tmp(tmp2[15]).t.h9Q1lG),
                    onPress() {
                      return closure_5(true);
                    },
                  };
                  const tmp34Result = trigger(tmp2[18]);
                  intl6 = tmp(tmp2[15]).intl;
                  items2[1] = closure_11(tmp34Result, obj9);
                  obj7.children = items2;
                  tmp37 = obj7;
                } else {
                  obj8.Icon = tmp(tmp2[20]).WorldIllocon;
                  const intl3 = tmp(tmp2[15]).intl;
                  obj8.message = intl3.string(tmp(tmp2[15]).t.h9Q1lG);
                  obj8.onPress = function onPress() {
                    return closure_5(true);
                  };
                  const items3 = [closure_11(tmp35, obj8)];
                  const obj10 = {
                    Icon: tmp(tmp2[19]).ChairIllocon,
                    message: intl4.string(tmp(tmp2[15]).t.uE7zcu),
                    onPress() {
                      return closure_5(false);
                    },
                  };
                  const tmp34Result2 = trigger(tmp2[18]);
                  intl4 = tmp(tmp2[15]).intl;
                  items3[1] = closure_11(tmp34Result2, obj10);
                  obj7.children = items3;
                  tmp37 = obj7;
                }
                const tmp31Result = closure_12(TableRowGroup, tmp37);
                cResult[20] = tmp14;
                cResult[21] = tmp31Result;
                tmp30 = tmp31Result;
              } else {
                tmp30 = cResult[21];
              }
              if (cResult[22] === tmp4.sections) {
                let tmp40;
                let tmp44;
                if (cResult[23] === tmp30) {
                  tmp40 = cResult[24];
                }
                const skipDescription = tmp4.skipDescription;
                if (cResult[25] !== tmp14) {
                  const intl7 = tmp(tmp2[15]).intl;
                  const obj11 = {
                    onSkip() {
                      return closure_5(null);
                    },
                  };
                  const formatResult = intl7.format(tmp(tmp2[15]).t["SMc+Gz"], obj11);
                  cResult[25] = tmp14;
                  cResult[26] = formatResult;
                  tmp44 = formatResult;
                } else {
                  tmp44 = cResult[26];
                }
                if (cResult[27] === tmp4.skipDescription) {
                  let tmp46;
                  if (cResult[28] === tmp44) {
                    tmp46 = cResult[29];
                  }
                  if (cResult[30] === tmp4.scrollContainer) {
                    if (cResult[31] === tmp26) {
                      if (cResult[32] === tmp40) {
                        let tmp49;
                        if (cResult[33] === tmp46) {
                          tmp49 = cResult[34];
                        }
                        if (cResult[35] === tmp4.contentContainer) {
                          let tmp53;
                          if (cResult[36] === tmp49) {
                            tmp53 = cResult[37];
                          }
                          return tmp53;
                        }
                        const rect = { top: true, left: true, right: true, style: contentContainer, children: tmp49 };
                        const tmp55 = closure_11(tmp(tmp2[21]).SafeAreaPaddingView, rect);
                        cResult[35] = tmp4.contentContainer;
                        cResult[36] = tmp49;
                        cResult[37] = tmp55;
                        tmp53 = tmp55;
                      }
                    }
                  }
                  const obj12 = { style: scrollContainer, children: items4 };
                  items4 = [tmp26, tmp40, tmp46];
                  const tmp52 = closure_12(closure_5, obj12);
                  cResult[30] = tmp4.scrollContainer;
                  cResult[31] = tmp26;
                  cResult[32] = tmp40;
                  cResult[33] = tmp46;
                  cResult[34] = tmp52;
                  tmp49 = tmp52;
                }
                const obj13 = {
                  style: skipDescription,
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: tmp44,
                };
                const tmp48 = closure_11(tmp(tmp2[16]).Text, obj13);
                cResult[27] = tmp4.skipDescription;
                cResult[28] = tmp44;
                cResult[29] = tmp48;
                tmp46 = tmp48;
              }
              const obj14 = { style: tmp4.sections, children: tmp30 };
              const tmp43 = closure_11(ref, obj14);
              cResult[22] = tmp4.sections;
              cResult[23] = tmp30;
              cResult[24] = tmp43;
              tmp40 = tmp43;
            }
          }
          const obj15 = { style: headerContainer, children: items5 };
          items5 = [tmp18, tmp23];
          const tmp29 = closure_12(ref, obj15);
          class P {
            constructor(isCommunityIntent) {
              let flag;
              let id1;
              const obj = { skipped: null == isCommunityIntent, is_community: flag };
              flag = isCommunityIntent;
              const track = AnalyticsUtilsDefault.track;
              const GUILD_CREATION_INTENT_SELECTED = constants.GUILD_CREATION_INTENT_SELECTED;
              AnalyticsUtilsDefault;
              if (isCommunityIntent == null) {
                flag = false;
              }
              track(GUILD_CREATION_INTENT_SELECTED, obj);
              const obj2 = { guildTemplate, isCommunityIntent };
              navigation.push(metroRequire.CREATE_SERVER, obj2);
              if (metroImportDefault.NUF === trigger) {
                const obj3 = NewUserAnalyticsUtils;
                obj3.trackNUFStep(metroImportAll.STEP_CREATION_INTENT, metroImportAll.STEP_GUILD_CREATE, {
                  skip: false,
                });
                let id;
                const track2 = AnalyticsUtilsDefault.track;
                const CREATE_GUILD_VIEWED = constants.CREATE_GUILD_VIEWED;
                AnalyticsUtilsDefault;
                if (guildTemplate != null) {
                  id = guildTemplate.id;
                }
                const obj4 = { guild_template_name: id };
                track2(CREATE_GUILD_VIEWED, obj4);
              } else if (tmp9.IN_APP === tmp8) {
                const obj5 = { type: "Create Guild Step 2", location_section: constants2.CREATE_JOIN_GUILD_MODAL };
                const tmpResult3 = AnalyticsUtilsDefault;
                tmpResult3.track(constants.OPEN_MODAL, obj5);
                const obj6 = { location_section: constants2.CREATE_JOIN_GUILD_MODAL, guild_template_name: id1 };
                id1 = undefined;
                const track3 = AnalyticsUtilsDefault.track;
                const CREATE_GUILD_VIEWED2 = constants.CREATE_GUILD_VIEWED;
                AnalyticsUtilsDefault;
                if (guildTemplate != null) {
                  id1 = guildTemplate.id;
                }
                track3(CREATE_GUILD_VIEWED2, obj6);
              }
            }
          }
          cResult[17] = tmp18;
          cResult[18] = tmp23;
          cResult[19] = tmp29;
          tmp26 = tmp29;
        }
      }
      class P {
        constructor(isCommunityIntent) {
          let flag;
          let id1;
          const obj = { skipped: null == isCommunityIntent, is_community: flag };
          flag = isCommunityIntent;
          const track = AnalyticsUtilsDefault.track;
          const GUILD_CREATION_INTENT_SELECTED = constants.GUILD_CREATION_INTENT_SELECTED;
          AnalyticsUtilsDefault;
          if (isCommunityIntent == null) {
            flag = false;
          }
          track(GUILD_CREATION_INTENT_SELECTED, obj);
          const obj2 = { guildTemplate, isCommunityIntent };
          navigation.push(metroRequire.CREATE_SERVER, obj2);
          if (metroImportDefault.NUF === trigger) {
            const obj3 = NewUserAnalyticsUtils;
            obj3.trackNUFStep(metroImportAll.STEP_CREATION_INTENT, metroImportAll.STEP_GUILD_CREATE, { skip: false });
            let id;
            const track2 = AnalyticsUtilsDefault.track;
            const CREATE_GUILD_VIEWED = constants.CREATE_GUILD_VIEWED;
            AnalyticsUtilsDefault;
            if (guildTemplate != null) {
              id = guildTemplate.id;
            }
            const obj4 = { guild_template_name: id };
            track2(CREATE_GUILD_VIEWED, obj4);
          } else if (tmp9.IN_APP === tmp8) {
            const obj5 = { type: "Create Guild Step 2", location_section: constants2.CREATE_JOIN_GUILD_MODAL };
            const tmpResult3 = AnalyticsUtilsDefault;
            tmpResult3.track(constants.OPEN_MODAL, obj5);
            const obj6 = { location_section: constants2.CREATE_JOIN_GUILD_MODAL, guild_template_name: id1 };
            id1 = undefined;
            const track3 = AnalyticsUtilsDefault.track;
            const CREATE_GUILD_VIEWED2 = constants.CREATE_GUILD_VIEWED;
            AnalyticsUtilsDefault;
            if (guildTemplate != null) {
              id1 = guildTemplate.id;
            }
            track3(CREATE_GUILD_VIEWED2, obj6);
          }
        }
      }
      cResult[6] = guildTemplate;
      cResult[7] = navigation;
      cResult[8] = trigger;
      cResult[9] = P;
      tmp14 = P;
    }
  : (arg0) => {
      let TableRowGroup;
      let closure_2;
      let guildTemplate;
      let intl;
      let intl2;
      let intl4;
      let intl6;
      let intl7;
      let items2;
      let items3;
      let obj13;
      let obj3;
      let require;
      let tmp10;
      let tmp15;
      let trigger;
      ({ guildTemplate: require, trigger } = arg0);
      dependencyMap = undefined;
      function onPress(isCommunityIntent) {
        let flag;
        let id1;
        const obj = { skipped: null == isCommunityIntent, is_community: flag };
        flag = isCommunityIntent;
        const track = AnalyticsUtilsDefault.track;
        const GUILD_CREATION_INTENT_SELECTED = constants.GUILD_CREATION_INTENT_SELECTED;
        AnalyticsUtilsDefault;
        if (isCommunityIntent == null) {
          flag = false;
        }
        track(GUILD_CREATION_INTENT_SELECTED, obj);
        const obj2 = { guildTemplate: require, isCommunityIntent };
        closure_2.push(metroRequire.CREATE_SERVER, obj2);
        if (metroImportDefault.NUF === trigger) {
          const obj3 = NewUserAnalyticsUtils;
          obj3.trackNUFStep(metroImportAll.STEP_CREATION_INTENT, metroImportAll.STEP_GUILD_CREATE, { skip: false });
          let id;
          const track2 = AnalyticsUtilsDefault.track;
          const CREATE_GUILD_VIEWED = constants.CREATE_GUILD_VIEWED;
          AnalyticsUtilsDefault;
          if (require != null) {
            id = require.id;
          }
          const obj4 = { guild_template_name: id };
          track2(CREATE_GUILD_VIEWED, obj4);
        } else if (tmp9.IN_APP === tmp8) {
          const obj5 = { type: "Create Guild Step 2", location_section: constants2.CREATE_JOIN_GUILD_MODAL };
          const tmpResult3 = AnalyticsUtilsDefault;
          tmpResult3.track(constants.OPEN_MODAL, obj5);
          const obj6 = { location_section: constants2.CREATE_JOIN_GUILD_MODAL, guild_template_name: id1 };
          id1 = undefined;
          const track3 = AnalyticsUtilsDefault.track;
          const CREATE_GUILD_VIEWED2 = constants.CREATE_GUILD_VIEWED;
          AnalyticsUtilsDefault;
          if (require != null) {
            id1 = require.id;
          }
          track3(CREATE_GUILD_VIEWED2, obj6);
        }
      }
      let tmp = closure_13();
      let obj = useNavigation;
      dependencyMap = obj.useNavigation();
      let obj2 = useIsScreenReaderEnabled;
      const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
      const ref = isScreenReaderEnabled.useRef(null);
      const items = [isScreenReaderEnabled];
      const effect = isScreenReaderEnabled.useEffect(() => {
        const tmp = isScreenReaderEnabled && null != ref.current;
        if (tmp) {
          const obj2 = { ref, delay: 100 };
          const obj = react_native;
          const result = obj.setAccessibilityFocus(obj2);
        }
      }, items);
      const items1 = [trigger];
      const effect1 = isScreenReaderEnabled.useEffect(() => {
        if (metroImportDefault.NUF === trigger) {
          const obj2 = NewUserAnalyticsUtils;
          obj2.trackNUFStep(metroImportAll.STEP_GUILD_TEMPLATE, metroImportAll.STEP_CREATION_INTENT, { skip: false });
        } else if (tmp2.IN_APP === tmp) {
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.OPEN_MODAL, { type: "Server Intent Discovery" });
        }
      }, items1);
      const rect = {
        top: true,
        left: true,
        right: true,
        style: tmp.contentContainer,
        children: closure_12(tmp10, obj3),
      };
      obj3 = { style: tmp.scrollContainer, children: items3 };
      let obj4 = { style: tmp.headerContainer, children: items2 };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      let obj5 = {
        ref,
        style: tmp.headerTitle,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl8.t.f3MvGS),
      };
      const Text = Text_Text.Text;
      intl = intl8.intl;
      items2 = [closure_11(Text, obj5)];
      let obj6 = {
        style: tmp.headerDescription,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.string(intl8.t.nOzc7w),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl8.intl;
      items2[1] = closure_11(Text2, obj6);
      items3 = [closure_12(ref, obj4), ,];
      const obj8 = { hasIcons: true, children: null };
      const obj7 = { style: tmp.sections, children: closure_12(TableRowGroup, tmp15) };
      TableRowGroup = TableRowGroup2.TableRowGroup;
      const tmp13 = trigger(11960);
      const obj9 = { Icon: null, message: null, onPress: null };
      tmp10 = onPress;
      const tmp11 = ref;
      if (closure_14) {
        obj9.Icon = ChairIllocon.ChairIllocon;
        const intl5 = intl8.intl;
        obj9.message = intl5.string(intl8.t.uE7zcu);
        obj9.onPress = function onPress() {
          onPress(false);
        };
        const items4 = [closure_11(tmp13, obj9)];
        const obj10 = {
          Icon: WorldIllocon.WorldIllocon,
          message: intl6.string(intl8.t.h9Q1lG),
          onPress() {
            onPress(true);
          },
        };
        const tmp12Result = trigger(11960);
        intl6 = intl8.intl;
        items4[1] = closure_11(tmp12Result, obj10);
        obj8.children = items4;
        tmp15 = obj8;
      } else {
        obj9.Icon = WorldIllocon.WorldIllocon;
        const intl3 = intl8.intl;
        obj9.message = intl3.string(intl8.t.h9Q1lG);
        obj9.onPress = function onPress() {
          onPress(true);
        };
        const items5 = [closure_11(tmp13, obj9)];
        const obj11 = {
          Icon: ChairIllocon.ChairIllocon,
          message: intl4.string(intl8.t.uE7zcu),
          onPress() {
            onPress(false);
          },
        };
        const tmp12Result2 = trigger(11960);
        intl4 = intl8.intl;
        items5[1] = closure_11(tmp12Result2, obj11);
        obj8.children = items5;
        tmp15 = obj8;
      }
      items3[1] = closure_11(tmp11, obj7);
      const obj12 = {
        style: tmp.skipDescription,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl7.format(intl8.t["SMc+Gz"], obj13),
      };
      const Text3 = Text_Text.Text;
      intl7 = intl8.intl;
      obj13 = {
        onSkip() {
          onPress(null);
        },
      };
      items3[2] = closure_11(Text3, obj12);
      return closure_11(SafeAreaPaddingView, rect);
    };
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default tmp7;
