// === Module 14753: UserSettingsFamilyCenterParentalControls ===

// Module 14753 (UserSettingsFamilyCenterParentalControls)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1085).UserSettingsSections;
const FamilyCenterSubPages = fn(7062).FamilyCenterSubPages;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { display: "flex", flex: 1 }, segmentedControlContainer: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, content: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.content = { paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stackNavigation(selectedSubPage[9]).c(51);
  closure_11();
  let obj = stackNavigation(selectedSubPage[9]);
  stackNavigation = stackNavigation(selectedSubPage[10]).useStackNavigation();
  const obj2 = stackNavigation(selectedSubPage[10]);
  const analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations;
  const tmp7 = require("useAnalyticsLocations");
  [tmp9, importDefault] = id.useState(0);
  const tmp8 = _slicedToArray(id.useState(0), 2);
  const settingNavigationRoute = stackNavigation(selectedSubPage[13]).useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (params != null) {
    selectedSubPage = params.selectedSubPage;
  }
  if (selectedSubPage == null) {
    selectedSubPage = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (params2 != null) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  _slicedToArray = tmp14;
  const obj4 = stackNavigation(selectedSubPage[13]);
  const selectedTeenUser = stackNavigation(selectedSubPage[14]).useSelectedTeenUser();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp17 = require("useUserIsTeenAgeGroup")();
  closure_5 = tmp17;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  id.useRef(false);
  if (cResult[1] === true === autoOpenCreate) {
    if (cResult[2] === stackNavigation) {
      if (cResult[3] === id) {
        let tmp19 = cResult[4];
        let tmp20 = cResult[5];
      }
      const effect = obj3.useEffect(tmp19, tmp20);
      if (cResult[6] === tmp17) {
        if (cResult[7] === stackNavigation) {
          if (cResult[8] === selectedSubPage) {
            if (cResult[9] === id) {
              let tmp22 = cResult[10];
              let tmp23 = cResult[11];
            }
            const layoutEffect = obj3.useLayoutEffect(tmp22, tmp23);
            class M {
              constructor() {
                if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                  tmp = id;
                  tmp2 = null;
                  if (null != id) {
                    obj = { title: null, headerRight: null };
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    tmp4 = closure_0;
                    intl = closure_0(closure_2[16]).intl;
                    tmp7 = closure_1;
                    obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                    tmp8 = closure_5;
                    fn = undefined;
                    if (!closure_5) {
                      fn = (arg0) => {
                        const obj = {};
                        const merged = Object.assign(arg0);
                        obj.onPress = function onPress() { ... };
                        const intl = stackNavigation(selectedSubPage[16]).intl;
                        obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                        return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                      };
                    }
                    obj.headerRight = fn;
                    setOptionsResult = closure_0.setOptions(obj);
                  }
                  return;
                }
                setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                return;
              }
            }
            const SCREEN_TIME_CONTROLS = FamilyCenterSubPages.SCREEN_TIME_CONTROLS;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[16]).intl;
              const stringResult = intl.string(tmp(tmp2[16]).t["+o1pDZ"]);
              class M {
                constructor() {
                  if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                    tmp = id;
                    tmp2 = null;
                    if (null != id) {
                      obj = { title: null, headerRight: null };
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      tmp4 = closure_0;
                      intl = closure_0(closure_2[16]).intl;
                      tmp7 = closure_1;
                      obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                      tmp8 = closure_5;
                      fn = undefined;
                      if (!closure_5) {
                        fn = (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj.onPress = function onPress() { ... };
                          const intl = stackNavigation(selectedSubPage[16]).intl;
                          obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                          return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                        };
                      }
                      obj.headerRight = fn;
                      setOptionsResult = closure_0.setOptions(obj);
                    }
                    return;
                  }
                  setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                  return;
                }
              }
              cResult[12] = stringResult;
              let tmp26 = stringResult;
            } else {
              tmp26 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { label: tmp26, id: FamilyCenterSubPages.CONTENT_AND_SOCIAL, page: null };
              class M {
                constructor() {
                  if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                    tmp = id;
                    tmp2 = null;
                    if (null != id) {
                      obj = { title: null, headerRight: null };
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      tmp4 = closure_0;
                      intl = closure_0(closure_2[16]).intl;
                      tmp7 = closure_1;
                      obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                      tmp8 = closure_5;
                      fn = undefined;
                      if (!closure_5) {
                        fn = (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj.onPress = function onPress() { ... };
                          const intl = stackNavigation(selectedSubPage[16]).intl;
                          obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                          return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                        };
                      }
                      obj.headerRight = fn;
                      setOptionsResult = closure_0.setOptions(obj);
                    }
                    return;
                  }
                  setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                  return;
                }
              }
              obj5.page = closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {});
              const intl2 = tmp(tmp2[16]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[16]).t.OAuOHD);
              cResult[13] = obj5;
              cResult[14] = stringResult1;
              let tmp28 = obj5;
            } else {
              tmp28 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [tmp28, ];
              const obj6 = { label: null, id: null, page: null };
              class M {
                constructor() {
                  if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                    tmp = id;
                    tmp2 = null;
                    if (null != id) {
                      obj = { title: null, headerRight: null };
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      tmp4 = closure_0;
                      intl = closure_0(closure_2[16]).intl;
                      tmp7 = closure_1;
                      obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                      tmp8 = closure_5;
                      fn = undefined;
                      if (!closure_5) {
                        fn = (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj.onPress = function onPress() { ... };
                          const intl = stackNavigation(selectedSubPage[16]).intl;
                          obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                          return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                        };
                      }
                      obj.headerRight = fn;
                      setOptionsResult = closure_0.setOptions(obj);
                    }
                    return;
                  }
                  setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                  return;
                }
              }
              obj6.id = FamilyCenterSubPages.DATA_AND_PRIVACY;
              obj6.page = closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {});
              items[1] = obj6;
              cResult[15] = items;
              let obj7 = items;
            } else {
              obj7 = cResult[15];
            }
            const _Symbol3 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor(arg0) {
                  obj = closure_1(closure_2[21]);
                  tab = obj.selectTab(closure_7[arg0].id);
                  return;
                }
              }
              cResult[16] = W;
              class M {
                constructor() {
                  if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                    tmp = id;
                    tmp2 = null;
                    if (null != id) {
                      obj = { title: null, headerRight: null };
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      tmp4 = closure_0;
                      intl = closure_0(closure_2[16]).intl;
                      tmp7 = closure_1;
                      obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                      tmp8 = closure_5;
                      fn = undefined;
                      if (!closure_5) {
                        fn = (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj.onPress = function onPress() { ... };
                          const intl = stackNavigation(selectedSubPage[16]).intl;
                          obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                          return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                        };
                      }
                      obj.headerRight = fn;
                      setOptionsResult = closure_0.setOptions(obj);
                    }
                    return;
                  }
                  setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                  return;
                }
              }
            } else {
              class W {
                constructor(arg0) {
                  obj = closure_1(closure_2[21]);
                  tab = obj.selectTab(closure_7[arg0].id);
                  return;
                }
              }
            }
            const _Math = Math;
            const bound = Math.max(obj7.findIndex((id) => id.id === selectedSubPage), 0);
            if (cResult[17] === tmp9) {
              class W {
                constructor(arg0) {
                  obj = closure_1(closure_2[21]);
                  tab = obj.selectTab(closure_7[arg0].id);
                  return;
                }
              }
              const segmentedControlState = tmp(tmp2[22]).useSegmentedControlState(tmp34);
              class M {
                constructor() {
                  if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
                    tmp = id;
                    tmp2 = null;
                    if (null != id) {
                      obj = { title: null, headerRight: null };
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      tmp4 = closure_0;
                      intl = closure_0(closure_2[16]).intl;
                      tmp7 = closure_1;
                      obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                      tmp8 = closure_5;
                      fn = undefined;
                      if (!closure_5) {
                        fn = (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj.onPress = function onPress() { ... };
                          const intl = stackNavigation(selectedSubPage[16]).intl;
                          obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                          return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                        };
                      }
                      obj.headerRight = fn;
                      setOptionsResult = closure_0.setOptions(obj);
                    }
                    return;
                  }
                  setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                  return;
                }
              }
              const tmpResult2 = tmp(tmp2[22]);
            }
            const obj8 = { items: obj7, onPageChange: tmp32, pageWidth: tmp9, defaultIndex: bound };
            cResult[17] = tmp9;
            cResult[18] = bound;
            cResult[19] = obj8;
            tmp34 = obj8;
          }
        }
      }
      class M {
        constructor() {
          if (CONTENT_AND_SOCIAL === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
            tmp = id;
            tmp2 = null;
            if (null != id) {
              obj = { title: null, headerRight: null };
              tmp5 = closure_0;
              tmp6 = closure_2;
              tmp4 = closure_0;
              intl = closure_0(closure_2[16]).intl;
              tmp7 = closure_1;
              obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
              tmp8 = closure_5;
              fn = undefined;
              if (!closure_5) {
                fn = (arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.onPress = function onPress() { ... };
                  const intl = stackNavigation(selectedSubPage[16]).intl;
                  obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
                  return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
                };
              }
              obj.headerRight = fn;
              setOptionsResult = closure_0.setOptions(obj);
            }
            return;
          }
          setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
          return;
        }
      }
      const items1 = [stackNavigation, selectedSubPage, id, tmp17];
      cResult[6] = tmp17;
      cResult[7] = stackNavigation;
      cResult[8] = selectedSubPage;
      cResult[9] = id;
      cResult[10] = M;
      cResult[11] = items1;
      tmp23 = items1;
      tmp22 = M;
    }
  }
  const fn2 = function b() {
    let tmp = closure_3;
    if (closure_3) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      stackNavigation.setParams({ autoOpenCreate: false });
      const obj = { teenId: id };
      stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  };
  const items2 = [true === autoOpenCreate, id, stackNavigation];
  cResult[1] = true === autoOpenCreate;
  cResult[2] = stackNavigation;
  cResult[3] = id;
  cResult[4] = fn2;
  cResult[5] = items2;
  tmp20 = items2;
  tmp19 = fn2;
  const tmpResult = stackNavigation(selectedSubPage[14]);
}) : (() => {
  let tmp = closure_11();
  stackNavigation = stackNavigation(selectedSubPage[10]).useStackNavigation();
  let obj = stackNavigation(selectedSubPage[10]);
  const analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations;
  const tmp6 = require("useAnalyticsLocations");
  [tmp8, importDefault] = id.useState(0);
  const tmp7 = _slicedToArray(id.useState(0), 2);
  const settingNavigationRoute = stackNavigation(selectedSubPage[13]).useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  selectedSubPage = undefined;
  if (params != null) {
    selectedSubPage = params.selectedSubPage;
  }
  if (selectedSubPage == null) {
    selectedSubPage = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  }
  const params2 = settingNavigationRoute.params;
  let autoOpenCreate;
  if (params2 != null) {
    autoOpenCreate = params2.autoOpenCreate;
  }
  _slicedToArray = tmp13;
  const obj3 = stackNavigation(selectedSubPage[13]);
  const selectedTeenUser = stackNavigation(selectedSubPage[14]).useSelectedTeenUser();
  id = undefined;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const tmp16 = require("useUserIsTeenAgeGroup")();
  closure_5 = tmp16;
  const callback = obj2.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  const ref = id.useRef(false);
  const items = [true === autoOpenCreate, id, stackNavigation];
  const effect = obj2.useEffect(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      stackNavigation.setParams({ autoOpenCreate: false });
      const obj = { teenId: id };
      stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
    }
  }, items);
  const items1 = [stackNavigation, selectedSubPage, id, tmp16];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
      if (null != id) {
        let obj = { title: null, headerRight: null };
        let intl = util.intl;
        obj.title = intl.string(_modDef2521["1Op+NP"]);
        let fn;
        if (!closure_5) {
          fn = (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, { teenId });
            };
            const intl = stackNavigation(selectedSubPage[16]).intl;
            obj.label = intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk);
            return closure_2_9(stackNavigation(selectedSubPage[18]).HeaderTextButton, obj);
          };
        }
        obj.headerRight = fn;
        stackNavigation.setOptions(obj);
      }
    }
    stackNavigation.setOptions({ title: "start", headerRight: "unicodeVersion" });
  }, items1);
  const obj4 = { label: null, id: null, page: null };
  let intl = tmp2(tmp3[16]).intl;
  obj4.label = intl.string(stackNavigation(selectedSubPage[16]).t["+o1pDZ"]);
  obj4.id = FamilyCenterSubPages.CONTENT_AND_SOCIAL;
  obj4.page = closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {});
  const items2 = [obj4, ];
  const obj5 = { label: null, id: null, page: null };
  const intl2 = tmp2(tmp3[16]).intl;
  obj5.label = intl2.string(stackNavigation(selectedSubPage[16]).t.OAuOHD);
  obj5.id = FamilyCenterSubPages.DATA_AND_PRIVACY;
  obj5.page = closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {});
  items2[1] = obj5;
  const tmp2Result = stackNavigation(selectedSubPage[14]);
  const tmp2Result2 = stackNavigation(selectedSubPage[22]);
  const segmentedControlState = tmp2Result2.useSegmentedControlState({
    items: items2,
    onPageChange(arg0) {
      const tab = FamilyCenterActionCreatorsDefault.selectTab(items2[arg0].id);
    },
    pageWidth: tmp8,
    defaultIndex: Math.max(items2.findIndex((id) => id.id === selectedSubPage), 0)
  });
  if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
    const obj7 = { value: analyticsLocations, children: null };
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { bottom: true, style: tmp.content, children: null };
    const obj10 = { readOnly: tmp16 };
    obj9.children = closure_9(require("FamilyCenterParentalControlsScreenTime"), obj10);
    obj8.children = closure_9(tmp2(tmp3[24]).SafeAreaPaddingView, obj9);
    obj7.children = closure_9(ref, obj8);
    let obj11 = obj7;
  } else {
    obj11 = { value: analyticsLocations, children: null };
    const obj12 = { style: tmp.container, onLayout: callback, children: null };
    const obj13 = { style: tmp.segmentedControlContainer, children: null };
    const obj14 = { state: segmentedControlState };
    obj13.children = closure_9(tmp2(tmp3[25]).SegmentedControl, obj14);
    const items3 = [closure_9(closure_5, obj13), ];
    const obj15 = { style: tmp.container, children: null };
    const obj16 = { children: null };
    const obj17 = { bottom: true, style: tmp.content, children: null };
    const obj18 = { state: segmentedControlState };
    obj17.children = closure_9(tmp2(tmp3[26]).SegmentedControlPages, obj18);
    obj16.children = closure_9(tmp2(tmp3[24]).SafeAreaPaddingView, obj17);
    obj15.children = closure_9(ref, obj16);
    items3[1] = closure_9(closure_5, obj15);
    obj12.children = items3;
    obj11.children = closure_10(closure_5, obj12);
  }
  return closure_9(stackNavigation(selectedSubPage[11]).AnalyticsLocationProvider, obj11);
});