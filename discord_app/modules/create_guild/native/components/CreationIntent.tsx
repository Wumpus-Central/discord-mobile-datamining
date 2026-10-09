// === Module 12418: CreationIntent ===

// Module 12418 (CreationIntent)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useNavigation from "useNavigation" /* 1503 */;
import Text_Text from "Text/Text" /* 5087 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5361 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5370 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12361 */;
import ChairIllocon from "ChairIllocon" /* 12419 */;
import WorldIllocon from "WorldIllocon" /* 12423 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(6660);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7, NUXGuildTemplatesAnalytics: closure_8 } = CreateGuildConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_9, AnalyticsLocations: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { contentContainer: { flex: 1, marginTop: fn(6263).NAV_BAR_HEIGHT }, scrollContainer: null, headerContainer: null, headerTitle: null, headerDescription: null, sections: null, skipDescription: null };
let obj3 = { flex: 1, marginTop: fn(6263).NAV_BAR_HEIGHT };
obj2.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContainer = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.skipDescription = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = Math.random() < 0.5;
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CreationIntent(guildTemplate) {
  const cResult = guildTemplate(navigation[9]).c(38);
  guildTemplate = guildTemplate.guildTemplate;
  const trigger = guildTemplate.trigger;
  const tmp4 = closure_13();
  let obj = guildTemplate(navigation[9]);
  navigation = guildTemplate(navigation[10]).useNavigation();
  let obj2 = guildTemplate(navigation[10]);
  const isScreenReaderEnabled = guildTemplate(navigation[11]).useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  if (cResult[0] !== isScreenReaderEnabled) {
    const fn = function o() {
      let tmp = isScreenReaderEnabled;
      if (isScreenReaderEnabled) {
        tmp = null != ref.current;
      }
      if (tmp) {
        const obj2 = { ref, delay: 100 };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      }
    };
    const items = [isScreenReaderEnabled];
    cResult[0] = isScreenReaderEnabled;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj4.useEffect(tmp8, tmp9);
  if (cResult[3] !== trigger) {
    const fn2 = function h() {
      if (constants2.NUF === trigger) {
        NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, { skip: false });
      } else if (tmp2.IN_APP === tmp) {
        AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, { type: "Server Intent Discovery" });
      }
    };
    const items1 = [trigger];
    cResult[3] = trigger;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const effect1 = obj4.useEffect(tmp11, tmp12);
  if (cResult[6] === guildTemplate) {
    if (cResult[7] === navigation) {
      if (cResult[8] === trigger) {
        let tmp14 = cResult[9];
      }
      closure_5 = tmp14;
      const _Symbol = Symbol;
      ({ contentContainer, scrollContainer, headerContainer, headerTitle } = tmp4);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[15]).intl;
        const stringResult = intl.string(tmp(tmp2[15]).t.f3MvGS);
        cResult[10] = stringResult;
        let tmp16 = stringResult;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] !== tmp4.headerTitle) {
        let obj5 = { ref, style: headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp16 };
        const tmp20 = closure_11(tmp(tmp2[16]).Text, obj5);
        cResult[11] = tmp4.headerTitle;
        cResult[12] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[15]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[15]).t.nOzc7w);
        cResult[13] = stringResult1;
        let tmp21 = stringResult1;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] !== tmp4.headerDescription) {
        let obj6 = { style: tmp4.headerDescription, variant: "text-sm/medium", color: "text-default", children: tmp21 };
        const tmp25 = closure_11(tmp(tmp2[16]).Text, obj6);
        cResult[14] = tmp4.headerDescription;
        cResult[15] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[15];
      }
      if (cResult[16] === tmp4.headerContainer) {
        if (cResult[17] === tmp18) {
          if (cResult[18] === tmp23) {
            let tmp26 = cResult[19];
          }
          if (cResult[20] !== tmp14) {
            let obj7 = { hasIcons: true, children: null };
            let tmp34 = trigger;
            let tmp33Result2 = trigger(tmp2[18]);
            let obj8 = { Icon: null, message: null, onPress: null };
            if (closure_14) {
              obj8.Icon = tmp(tmp2[19]).ChairIllocon;
              const intl5 = tmp(tmp2[15]).intl;
              obj8.message = intl5.string(tmp(tmp2[15]).t.uE7zcu);
              obj8.onPress = function onPress() {
                return closure_5(false);
              };
              obj8 = [, ];
              obj8[0] = closure_11(tmp33Result2, obj8);
              tmp34 = tmp34(tmp2[18]);
              const obj9 = { Icon: tmp(tmp2[20]).WorldIllocon, message: null, onPress: null };
              const intl6 = tmp(tmp2[15]).intl;
              obj9.message = intl6.string(tmp(tmp2[15]).t.h9Q1lG);
              obj9.onPress = function onPress() {
                return closure_5(true);
              };
              tmp33Result2 = closure_11(tmp34, obj9);
              obj8[1] = tmp33Result2;
              obj7.children = obj8;
              let tmp37 = obj7;
              const tmp33Result = closure_11(tmp33Result2, obj8);
            } else {
              obj8[0] = tmp(tmp2[20]).WorldIllocon;
              const intl3 = tmp(tmp2[15]).intl;
              obj8[1] = intl3.string(tmp(tmp2[15]).t.h9Q1lG);
              obj8[2] = function onPress() {
                return closure_5(true);
              };
              const items2 = [closure_11(tmp33Result2, obj8), ];
              const obj10 = { Icon: tmp(tmp2[19]).ChairIllocon, message: null, onPress: null };
              const intl4 = tmp(tmp2[15]).intl;
              obj10.message = intl4.string(tmp(tmp2[15]).t.uE7zcu);
              obj10.onPress = function onPress() {
                return closure_5(false);
              };
              items2[1] = closure_11(tmp34(tmp2[18]), obj10);
              obj7.children = items2;
              tmp37 = obj7;
              const tmp34Result = tmp34(tmp2[18]);
            }
            const tmp31Result = closure_12(tmp(tmp2[17]).TableRowGroup, tmp37);
            cResult[20] = tmp14;
            cResult[21] = tmp31Result;
          } else {
            if (cResult[22] === tmp4.sections) {
              if (cResult[23] === tmp30) {
                let tmp41 = cResult[24];
              }
              if (cResult[25] !== tmp14) {
                const intl7 = tmp(tmp2[15]).intl;
                const obj11 = {
                  onSkip() {
                                  return closure_5(null);
                                }
                };
                const formatResult = intl7.format(tmp(tmp2[15]).t["SMc+Gz"], obj11);
                cResult[25] = tmp14;
                cResult[26] = formatResult;
                let tmp45 = formatResult;
              } else {
                tmp45 = cResult[26];
              }
              if (cResult[27] === tmp4.skipDescription) {
                if (cResult[28] === tmp45) {
                  let tmp47 = cResult[29];
                }
                if (cResult[30] === tmp4.scrollContainer) {
                  if (cResult[31] === tmp26) {
                    if (cResult[32] === tmp41) {
                      if (cResult[33] === tmp47) {
                        let tmp50 = cResult[34];
                      }
                      if (cResult[35] === tmp4.contentContainer) {
                        if (cResult[36] === tmp50) {
                          let tmp54 = cResult[37];
                        }
                        return tmp54;
                      }
                      const rect = { top: true, left: true, right: true, style: contentContainer, children: tmp50 };
                      const tmp56 = closure_11(tmp(tmp2[21]).SafeAreaPaddingView, rect);
                      cResult[35] = tmp4.contentContainer;
                      cResult[36] = tmp50;
                      cResult[37] = tmp56;
                      tmp54 = tmp56;
                    }
                  }
                }
                const obj12 = { style: scrollContainer, children: null };
                const items3 = [tmp26, tmp41, tmp47];
                obj12.children = items3;
                const tmp53 = closure_12(closure_5, obj12);
                cResult[30] = tmp4.scrollContainer;
                cResult[31] = tmp26;
                cResult[32] = tmp41;
                cResult[33] = tmp47;
                cResult[34] = tmp53;
                tmp50 = tmp53;
              }
              const obj13 = { style: tmp4.skipDescription, variant: "text-sm/medium", color: "text-default", children: tmp45 };
              const tmp49 = closure_11(tmp(tmp2[16]).Text, obj13);
              cResult[27] = tmp4.skipDescription;
              cResult[28] = tmp45;
              cResult[29] = tmp49;
              tmp47 = tmp49;
            }
            const obj14 = { style: tmp4.sections, children: cResult[21] };
            const tmp44 = closure_11(ref, obj14);
            cResult[22] = tmp4.sections;
            cResult[23] = cResult[21];
            cResult[24] = tmp44;
            tmp41 = tmp44;
          }
        }
      }
      const obj15 = { style: headerContainer, children: null };
      const items4 = [tmp18, tmp23];
      obj15.children = items4;
      const tmp29 = closure_12(ref, obj15);
      cResult[16] = tmp4.headerContainer;
      cResult[17] = tmp18;
      cResult[18] = tmp23;
      cResult[19] = tmp29;
      tmp26 = tmp29;
    }
  }
  function onPress(isCommunityIntent) {
    const obj2 = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj2.is_community = flag;
    AnalyticsUtilsDefault.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj2);
    navigation.push(constants.CREATE_SERVER, { guildTemplate, isCommunityIntent });
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, { skip: false });
      let id;
      if (guildTemplate != null) {
        id = guildTemplate.id;
      }
      const obj5 = { guild_template_name: id };
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj5);
      const tmpResult = AnalyticsUtilsDefault;
    } else if (tmp8.IN_APP === tmp7) {
      const obj6 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, obj6);
      const tmpResult3 = AnalyticsUtilsDefault;
      const obj7 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL, guild_template_name: null };
      let id1;
      if (guildTemplate != null) {
        id1 = guildTemplate.id;
      }
      obj7.guild_template_name = id1;
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj7);
      const tmpResult4 = AnalyticsUtilsDefault;
    }
    const obj3 = { guildTemplate, isCommunityIntent };
  }
  cResult[6] = guildTemplate;
  cResult[7] = navigation;
  cResult[8] = trigger;
  cResult[9] = onPress;
  tmp14 = onPress;
  let obj3 = guildTemplate(navigation[11]);
}) : (function CreationIntent(arg0) {
  ({ guildTemplate: require, trigger } = arg0);
  function onPress(isCommunityIntent) {
    const obj2 = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj2.is_community = flag;
    AnalyticsUtilsDefault.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj2);
    closure_2.push(constants.CREATE_SERVER, { guildTemplate, isCommunityIntent });
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, { skip: false });
      let id;
      if (guildTemplate != null) {
        id = guildTemplate.id;
      }
      const obj5 = { guild_template_name: id };
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj5);
      const tmpResult = AnalyticsUtilsDefault;
    } else if (tmp8.IN_APP === tmp7) {
      const obj6 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, obj6);
      const tmpResult3 = AnalyticsUtilsDefault;
      const obj7 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL, guild_template_name: null };
      let id1;
      if (guildTemplate != null) {
        id1 = guildTemplate.id;
      }
      obj7.guild_template_name = id1;
      AnalyticsUtilsDefault.track(constants4.CREATE_GUILD_VIEWED, obj7);
      const tmpResult4 = AnalyticsUtilsDefault;
    }
    const obj3 = { guildTemplate, isCommunityIntent };
  }
  let tmp = closure_13();
  dependencyMap = useNavigation.useNavigation();
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, { type: "Server Intent Discovery" });
    }
  }, items1);
  const rect = { top: true, left: true, right: true, style: tmp.contentContainer, children: null };
  let obj3 = { style: tmp.scrollContainer, children: null };
  let obj4 = { style: tmp.headerContainer, children: null };
  let obj5 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.f3MvGS);
  const items2 = [closure_11(Text_Text.Text, obj5), ];
  let obj6 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.nOzc7w);
  items2[1] = closure_11(Text_Text.Text, obj6);
  obj4.children = items2;
  const items3 = [closure_12(ref, obj4), , ];
  let obj7 = { style: tmp.sections, children: null };
  const obj8 = { hasIcons: true, children: null };
  const tmp13 = trigger(11984);
  const obj9 = { Icon: null, message: null, onPress: null };
  if (closure_14) {
    obj9.Icon = ChairIllocon.ChairIllocon;
    const intl5 = util.intl;
    obj9.message = intl5.string(util.t.uE7zcu);
    obj9.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [closure_11(tmp13, obj9), ];
    const obj10 = { Icon: WorldIllocon.WorldIllocon, message: null, onPress: null };
    const intl6 = util.intl;
    obj10.message = intl6.string(util.t.h9Q1lG);
    obj10.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = closure_11(trigger(11984), obj10);
    obj8.children = items4;
    let tmp15 = obj8;
    const tmp12Result = trigger(11984);
  } else {
    obj9.Icon = WorldIllocon.WorldIllocon;
    const intl3 = util.intl;
    obj9.message = intl3.string(util.t.h9Q1lG);
    obj9.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [closure_11(tmp13, obj9), ];
    const obj11 = { Icon: ChairIllocon.ChairIllocon, message: null, onPress: null };
    const intl4 = util.intl;
    obj11.message = intl4.string(util.t.uE7zcu);
    obj11.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = closure_11(trigger(11984), obj11);
    obj8.children = items5;
    tmp15 = obj8;
    const tmp12Result2 = trigger(11984);
  }
  obj7.children = closure_12(TableRowGroup.TableRowGroup, tmp15);
  items3[1] = closure_11(ref, obj7);
  const obj12 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = util.intl;
  obj12.children = intl7.format(util.t["SMc+Gz"], {
    onSkip() {
      onPress(null);
    }
  });
  items3[2] = closure_11(Text_Text.Text, obj12);
  obj3.children = items3;
  rect.children = closure_12(onPress, obj3);
  return closure_11(common_SafeAreaView.SafeAreaPaddingView, rect);
});