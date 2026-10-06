// discord_app/modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import _modDef2521 from "../../../parent_tools/FamilyCenter.messages.js";
import FamilyCenterConstants from "../../../parent_tools/FamilyCenterConstants.tsx";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let setOptionsResult, setOptionsResult1, tmp2, tmp4;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flex: 1 }, segmentedControlContainer: obj2, content: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_3;
      let id;
      let selectedSubPage;
      let stackNavigation;
      let tmp34;
      let tmp9;
      let tmp = stackNavigation;
      let obj = stackNavigation(selectedSubPage[9]);
      const cResult = obj.c(51);
      closure_11();
      const obj2 = stackNavigation(selectedSubPage[10]);
      stackNavigation = obj2.useStackNavigation();
      const tmp7 = require("useAnalyticsLocations");
      const analyticsLocations = tmp7(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations;
      [tmp9, importDefault] = id.useState(0);
      _slicedToArray(id.useState(0), 2);
      const obj4 = stackNavigation(selectedSubPage[13]);
      const settingNavigationRoute = obj4.useSettingNavigationRoute();
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
      const tmpResult = tmp(selectedSubPage[14]);
      const selectedTeenUser = tmpResult.useSelectedTeenUser();
      id = undefined;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      const tmp17 = require("useUserIsTeenAgeGroup")();
      let closure_5 = tmp17;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let fn = function o(nativeEvent) {
          importDefault(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const ref = obj3.useRef(false);
      if ((cResult[1] === true) === autoOpenCreate) {
        if (cResult[2] === stackNavigation) {
          let tmp19;
          let tmp20;
          if (cResult[3] === id) {
            tmp19 = cResult[4];
            tmp20 = cResult[5];
          }
          const effect = obj3.useEffect(tmp19, tmp20);
          if (cResult[6] === tmp17) {
            if (cResult[7] === stackNavigation) {
              if (cResult[8] === selectedSubPage) {
                let tmp22;
                let tmp23;
                let tmp26;
                let tmp28;
                let obj7;
                if (cResult[9] === id) {
                  tmp22 = cResult[10];
                  tmp23 = cResult[11];
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
                        setOptions = closure_0.setOptions;
                        intl = closure_0(closure_2[16]).intl;
                        tmp7 = closure_1;
                        obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                        tmp8 = closure_5;
                        fn = undefined;
                        if (!closure_5) {
                          fn = (arg0) => {
                            let intl;
                            let teenId;
                            let obj = {
                              onPress() {
                                /* body not rendered: F153251 */
                              },
                              label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                            };
                            const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                            const merged = Object.assign(arg0);
                            intl = stackNavigation(selectedSubPage[16]).intl;
                            return closure_2_9(HeaderTextButton, obj);
                          };
                        }
                        obj.headerRight = fn;
                        setOptionsResult = setOptions(obj);
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
                  const stringResult = intl.string(tmp(selectedSubPage[16]).t["+o1pDZ"]);
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
                          setOptions = closure_0.setOptions;
                          intl = closure_0(closure_2[16]).intl;
                          tmp7 = closure_1;
                          obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                          tmp8 = closure_5;
                          fn = undefined;
                          if (!closure_5) {
                            fn = (arg0) => {
                              let intl;
                              let teenId;
                              let obj = {
                                onPress() {
                                  /* body not rendered: F153251 */
                                },
                                label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                              };
                              const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                              const merged = Object.assign(arg0);
                              intl = stackNavigation(selectedSubPage[16]).intl;
                              return closure_2_9(HeaderTextButton, obj);
                            };
                          }
                          obj.headerRight = fn;
                          setOptionsResult = setOptions(obj);
                        }
                        return;
                      }
                      setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                      return;
                    }
                  }
                  cResult[12] = stringResult;
                  tmp26 = stringResult;
                } else {
                  tmp26 = cResult[12];
                }
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = {
                    label: tmp26,
                    id: FamilyCenterSubPages.CONTENT_AND_SOCIAL,
                    page: closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {}),
                  };
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
                          setOptions = closure_0.setOptions;
                          intl = closure_0(closure_2[16]).intl;
                          tmp7 = closure_1;
                          obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                          tmp8 = closure_5;
                          fn = undefined;
                          if (!closure_5) {
                            fn = (arg0) => {
                              let intl;
                              let teenId;
                              let obj = {
                                onPress() {
                                  /* body not rendered: F153251 */
                                },
                                label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                              };
                              const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                              const merged = Object.assign(arg0);
                              intl = stackNavigation(selectedSubPage[16]).intl;
                              return closure_2_9(HeaderTextButton, obj);
                            };
                          }
                          obj.headerRight = fn;
                          setOptionsResult = setOptions(obj);
                        }
                        return;
                      }
                      setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                      return;
                    }
                  }
                  const intl2 = tmp(tmp2[16]).intl;
                  cResult[13] = obj5;
                  cResult[14] = intl2.string(tmp(selectedSubPage[16]).t.OAuOHD);
                  tmp28 = obj5;
                  const stringResult1 = intl2.string(tmp(selectedSubPage[16]).t.OAuOHD);
                } else {
                  tmp28 = cResult[13];
                }
                const _Symbol2 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [tmp28];
                  const obj6 = {
                    label: null,
                    id: FamilyCenterSubPages.DATA_AND_PRIVACY,
                    page: closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {}),
                  };
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
                          setOptions = closure_0.setOptions;
                          intl = closure_0(closure_2[16]).intl;
                          tmp7 = closure_1;
                          obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                          tmp8 = closure_5;
                          fn = undefined;
                          if (!closure_5) {
                            fn = (arg0) => {
                              let intl;
                              let teenId;
                              let obj = {
                                onPress() {
                                  /* body not rendered: F153251 */
                                },
                                label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                              };
                              const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                              const merged = Object.assign(arg0);
                              intl = stackNavigation(selectedSubPage[16]).intl;
                              return closure_2_9(HeaderTextButton, obj);
                            };
                          }
                          obj.headerRight = fn;
                          setOptionsResult = setOptions(obj);
                        }
                        return;
                      }
                      setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                      return;
                    }
                  }
                  items[1] = obj6;
                  cResult[15] = items;
                  obj7 = items;
                } else {
                  obj7 = cResult[15];
                }
                const _Symbol3 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  class W {
                    constructor(arg0) {
                      const obj = FamilyCenterActionCreatorsDefault;
                      const tab = obj.selectTab(obj7[arg0].id);
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
                          setOptions = closure_0.setOptions;
                          intl = closure_0(closure_2[16]).intl;
                          tmp7 = closure_1;
                          obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                          tmp8 = closure_5;
                          fn = undefined;
                          if (!closure_5) {
                            fn = (arg0) => {
                              let intl;
                              let teenId;
                              let obj = {
                                onPress() {
                                  /* body not rendered: F153251 */
                                },
                                label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                              };
                              const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                              const merged = Object.assign(arg0);
                              intl = stackNavigation(selectedSubPage[16]).intl;
                              return closure_2_9(HeaderTextButton, obj);
                            };
                          }
                          obj.headerRight = fn;
                          setOptionsResult = setOptions(obj);
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
                      const obj = FamilyCenterActionCreatorsDefault;
                      const tab = obj.selectTab(obj7[arg0].id);
                    }
                  }
                }
                const _Math = Math;
                const bound = Math.max(
                  obj7.findIndex((id) => id.id === selectedSubPage),
                  0,
                );
                if (cResult[17] === tmp9) {
                  class W {
                    constructor(arg0) {
                      const obj = FamilyCenterActionCreatorsDefault;
                      const tab = obj.selectTab(obj7[arg0].id);
                    }
                  }
                  const tmpResult2 = tmp(selectedSubPage[22]);
                  const segmentedControlState = tmpResult2.useSegmentedControlState(tmp34);
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
                          setOptions = closure_0.setOptions;
                          intl = closure_0(closure_2[16]).intl;
                          tmp7 = closure_1;
                          obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                          tmp8 = closure_5;
                          fn = undefined;
                          if (!closure_5) {
                            fn = (arg0) => {
                              let intl;
                              let teenId;
                              let obj = {
                                onPress() {
                                  /* body not rendered: F153251 */
                                },
                                label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                              };
                              const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                              const merged = Object.assign(arg0);
                              intl = stackNavigation(selectedSubPage[16]).intl;
                              return closure_2_9(HeaderTextButton, obj);
                            };
                          }
                          obj.headerRight = fn;
                          setOptionsResult = setOptions(obj);
                        }
                        return;
                      }
                      setOptionsResult1 = closure_0.setOptions({ title: "start", headerRight: "unicodeVersion" });
                      return;
                    }
                  }
                  return tmp36;
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
                  setOptions = closure_0.setOptions;
                  intl = closure_0(closure_2[16]).intl;
                  tmp7 = closure_1;
                  obj.title = intl.string(closure_1(closure_2[17])["1Op+NP"]);
                  tmp8 = closure_5;
                  fn = undefined;
                  if (!closure_5) {
                    fn = (arg0) => {
                      let intl;
                      let teenId;
                      let obj = {
                        onPress() {
                          /* body not rendered: F153251 */
                        },
                        label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                      };
                      const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                      const merged = Object.assign(arg0);
                      intl = stackNavigation(selectedSubPage[16]).intl;
                      return closure_2_9(HeaderTextButton, obj);
                    };
                  }
                  obj.headerRight = fn;
                  setOptionsResult = setOptions(obj);
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
        const tmp = closure_3 && null != id && !ref.current;
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
    }
  : () => {
      let SafeAreaPaddingView;
      let SafeAreaPaddingView2;
      let closure_3;
      let id;
      let intl;
      let intl2;
      let items3;
      let obj10;
      let obj11;
      let obj12;
      let obj14;
      let obj16;
      let obj17;
      let obj18;
      let obj8;
      let obj9;
      let selectedSubPage;
      let stackNavigation;
      let tmp8;
      let tmp = closure_11();
      let obj = stackNavigation(selectedSubPage[10]);
      stackNavigation = obj.useStackNavigation();
      const tmp6 = require("useAnalyticsLocations");
      const analyticsLocations = tmp6(require("AnalyticsLocation").FAMILY_CENTER).analyticsLocations;
      [tmp8, importDefault] = id.useState(0);
      _slicedToArray(id.useState(0), 2);
      const obj3 = stackNavigation(selectedSubPage[13]);
      const settingNavigationRoute = obj3.useSettingNavigationRoute();
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
      const tmp2Result = stackNavigation(selectedSubPage[14]);
      const selectedTeenUser = tmp2Result.useSelectedTeenUser();
      id = undefined;
      if (selectedTeenUser != null) {
        id = selectedTeenUser.id;
      }
      const tmp16 = require("useUserIsTeenAgeGroup")();
      let closure_5 = tmp16;
      const callback = obj2.useCallback((nativeEvent) => {
        importDefault(nativeEvent.nativeEvent.layout.width);
      }, []);
      const ref = obj2.useRef(false);
      const items = [true === autoOpenCreate, id, stackNavigation];
      const effect = obj2.useEffect(() => {
        const tmp = closure_3 && null != id && !ref.current;
        if (tmp) {
          ref.current = true;
          stackNavigation.setParams({ autoOpenCreate: false });
          const obj = { teenId: id };
          stackNavigation.navigate(UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
        }
      }, items);
      const items1 = [stackNavigation, selectedSubPage, id, tmp16];
      const layoutEffect = obj2.useLayoutEffect(() => {
        let fn;
        let intl;
        if (selectedSubPage === FamilyCenterSubPages.SCREEN_TIME_CONTROLS) {
          if (null != id) {
            let obj = { title: intl.string(_modDef2521["1Op+NP"]), headerRight: fn };
            const setOptions = stackNavigation.setOptions;
            intl = intl3.intl;
            fn = undefined;
            if (!closure_5) {
              fn = (arg0) => {
                let intl;
                let teenId;
                let obj = {
                  onPress() {
                    const obj = { teenId };
                    return navigation.navigate(constants.FAMILY_CENTER_SCHEDULE_DOWNTIME, obj);
                  },
                  label: intl.string(stackNavigation(selectedSubPage[16]).t.OYkgVk),
                };
                const HeaderTextButton = stackNavigation(selectedSubPage[18]).HeaderTextButton;
                const merged = Object.assign(arg0);
                intl = stackNavigation(selectedSubPage[16]).intl;
                return closure_2_9(HeaderTextButton, obj);
              };
            }
            setOptions(obj);
          }
        }
        stackNavigation.setOptions({ title: "start", headerRight: "unicodeVersion" });
      }, items1);
      const SCREEN_TIME_CONTROLS = FamilyCenterSubPages.SCREEN_TIME_CONTROLS;
      const obj4 = {
        label: intl.string(stackNavigation(selectedSubPage[16]).t["+o1pDZ"]),
        id: FamilyCenterSubPages.CONTENT_AND_SOCIAL,
        page: closure_9(require("FamilyCenterParentalControlsContentAndSocial"), {}),
      };
      intl = tmp2(tmp3[16]).intl;
      const items2 = [obj4];
      const obj5 = {
        label: intl2.string(stackNavigation(selectedSubPage[16]).t.OAuOHD),
        id: FamilyCenterSubPages.DATA_AND_PRIVACY,
        page: closure_9(require("FamilyCenterParentalControlsDataAndPrivacy"), {}),
      };
      intl2 = tmp2(tmp3[16]).intl;
      items2[1] = obj5;
      const useSegmentedControlState = stackNavigation(selectedSubPage[22]).useSegmentedControlState;
      const tmp2Result2 = stackNavigation(selectedSubPage[22]);
      const obj6 = {
        items: items2,
        onPageChange(arg0) {
          const obj = FamilyCenterActionCreatorsDefault;
          const tab = obj.selectTab(items2[arg0].id);
        },
        pageWidth: tmp8,
        defaultIndex: Math.max(
          items2.findIndex((id) => id.id === selectedSubPage),
          0,
        ),
      };
      const segmentedControlState = useSegmentedControlState(obj6);
      const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
      if (selectedSubPage === SCREEN_TIME_CONTROLS) {
        const obj7 = { value: analyticsLocations, children: closure_9(ref, obj8) };
        obj8 = { style: tmp.container, children: closure_9(SafeAreaPaddingView, obj9) };
        obj9 = {
          bottom: true,
          style: tmp.content,
          children: closure_9(require("FamilyCenterParentalControlsScreenTime"), obj10),
        };
        SafeAreaPaddingView = tmp2(tmp3[24]).SafeAreaPaddingView;
        obj11 = obj7;
        obj10 = { readOnly: tmp16 };
      } else {
        obj11 = { value: analyticsLocations, children: closure_10(closure_5, obj12) };
        obj12 = { style: tmp.container, onLayout: callback, children: items3 };
        const obj13 = {
          style: tmp.segmentedControlContainer,
          children: closure_9(stackNavigation(selectedSubPage[25]).SegmentedControl, obj14),
        };
        obj14 = { state: segmentedControlState };
        items3 = [closure_9(closure_5, obj13)];
        const obj15 = { style: tmp.container, children: closure_9(ref, obj16) };
        obj16 = { children: closure_9(SafeAreaPaddingView2, obj17) };
        obj17 = {
          bottom: true,
          style: tmp.content,
          children: closure_9(stackNavigation(selectedSubPage[26]).SegmentedControlPages, obj18),
        };
        SafeAreaPaddingView2 = tmp2(tmp3[24]).SafeAreaPaddingView;
        obj18 = { state: segmentedControlState };
        items3[1] = closure_9(closure_5, obj15);
      }
      return closure_9(AnalyticsLocationProvider, obj11);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/family_center/native/UserSettingsFamilyCenterParentalControls.tsx",
);

export default tmp5;
