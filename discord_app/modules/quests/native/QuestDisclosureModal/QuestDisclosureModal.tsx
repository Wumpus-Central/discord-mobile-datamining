// === Module 14911: QuestDisclosureModal ===

// Module 14911 (QuestDisclosureModal)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef4809 from "module_4809" /* 4809 */;
import Navigator from "Navigator" /* 6496 */;
import HeaderActionButton from "HeaderActionButton" /* 6880 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14910 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 14912 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const constants = { DISCLOSURE: "disclosure" };
let ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef4809, onPress: first, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
    const tmp8 = jsx(HeaderActionButton.HeaderActionButton, { source: _modDef4809, onPress: first, accessibilityLabel: null });
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = {
    source: _modDef4809,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef4809,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((adCreativeType) => {
  const cResult = adCreativeType(gamePublisher[2]).c(13);
  adCreativeType = adCreativeType.adCreativeType;
  const isTargetedDisclosure = adCreativeType.isTargetedDisclosure;
  gamePublisher = adCreativeType.gamePublisher;
  const gameTitle = adCreativeType.gameTitle;
  const cosponsorName = adCreativeType.cosponsorName;
  const isVideoQuest = adCreativeType.isVideoQuest;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return isTargetedDisclosure(gamePublisher[3]).hideModal();
    };
    cResult[0] = fn;
    let onClose = fn;
  } else {
    onClose = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return null;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor() {
        return null;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return null;
      }
    }
    cResult[2] = tmp5;
  } else {
    class C {
      constructor() {
        return null;
      }
    }
  }
  if (cResult[3] === adCreativeType) {
    class C {
      constructor() {
        return null;
      }
    }
  }
  cResult[3] = adCreativeType;
  cResult[4] = cosponsorName;
  cResult[5] = gamePublisher;
  cResult[6] = gameTitle;
  cResult[7] = isTargetedDisclosure;
  cResult[8] = isVideoQuest;
  cResult[9] = { [closure_4.DISCLOSURE]: obj3 };
  let obj = adCreativeType(gamePublisher[2]);
  const obj2 = { [closure_4.DISCLOSURE]: obj3 };
}) : ((arg0) => {
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: closure_5 } = arg0);
  function onClose() {
    return isTargetedDisclosure(gamePublisher[3]).hideModal();
  }
  const obj2 = {
    screens: {
      [closure_4.DISCLOSURE]: {
        headerLeft,
        headerRight() {
          return null;
        },
        headerTitle() {
          const obj = { title: null };
          const intl = adCreativeType(gamePublisher[6]).intl;
          obj.title = intl.string(adCreativeType(gamePublisher[6]).t.GcsZKJ);
          return gameTitle(adCreativeType(gamePublisher[7]).NavigatorHeader, obj);
        },
        render() {
          return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
        }
      }
    },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null
  };
  let intl = util.intl;
  obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, {
    screens: {
      [closure_4.DISCLOSURE]: {
        headerLeft,
        headerRight() {
          return null;
        },
        headerTitle() {
          const obj = { title: null };
          const intl = adCreativeType(gamePublisher[6]).intl;
          obj.title = intl.string(adCreativeType(gamePublisher[6]).t.GcsZKJ);
          return gameTitle(adCreativeType(gamePublisher[7]).NavigatorHeader, obj);
        },
        render() {
          return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
        }
      }
    },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null
  });
});