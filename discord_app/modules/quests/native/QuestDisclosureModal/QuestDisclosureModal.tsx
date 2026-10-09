// === Module 15304: QuestDisclosureModal ===

// Module 15304 (QuestDisclosureModal)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef5010 from "module_5010" /* 5010 */;
import Navigator from "Navigator" /* 6686 */;
import HeaderActionButton from "HeaderActionButton" /* 7082 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15303 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 15305 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const constants = { DISCLOSURE: "disclosure" };
let ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    }
    cResult[0] = onClose;
    let first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef5010, onPress: first, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
    const tmp8 = jsx(HeaderActionButton.HeaderActionButton, { source: _modDef5010, onPress: first, accessibilityLabel: null });
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function CloseButton() {
  const obj = {
    source: _modDef5010,
    onPress: function onClose() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef5010,
    onPress: function onClose() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDisclosureModal(adCreativeType) {
  const cResult = adCreativeType(gamePublisher[2]).c(13);
  adCreativeType = adCreativeType.adCreativeType;
  const isTargetedDisclosure = adCreativeType.isTargetedDisclosure;
  gamePublisher = adCreativeType.gamePublisher;
  const gameTitle = adCreativeType.gameTitle;
  const cosponsorName = adCreativeType.cosponsorName;
  const isVideoQuest = adCreativeType.isVideoQuest;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      return isTargetedDisclosure(gamePublisher[3]).hideModal();
    }
    cResult[0] = onClose;
  } else {
    onClose = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function blank() {
      return null;
    }
    cResult[1] = blank;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _() {
      const obj = { title: null };
      const intl = adCreativeType(gamePublisher[6]).intl;
      obj.title = intl.string(adCreativeType(gamePublisher[6]).t.GcsZKJ);
      return gameTitle(adCreativeType(gamePublisher[7]).NavigatorHeader, obj);
    };
    cResult[2] = fn;
  }
  if (cResult[3] === adCreativeType) {
    if (cResult[4] === cosponsorName) {
      if (cResult[5] === gamePublisher) {
        if (cResult[6] === gameTitle) {
          if (cResult[7] === isTargetedDisclosure) {
            if (cResult[8] === isVideoQuest) {
              let tmp7 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[6]).intl;
              const stringResult = intl.string(tmp(tmp2[6]).t["13/7kX"]);
              cResult[10] = stringResult;
              let tmp8 = stringResult;
            } else {
              tmp8 = cResult[10];
            }
            if (cResult[11] !== tmp7) {
              const obj2 = { screens: tmp7, initialRouteName: cosponsorName.DISCLOSURE, headerBackTitle: tmp8 };
              const tmp13 = gameTitle(tmp(tmp2[9]).Navigator, obj2);
              cResult[11] = tmp7;
              cResult[12] = tmp13;
              let tmp10 = tmp13;
            } else {
              tmp10 = cResult[12];
            }
            return tmp10;
          }
        }
      }
    }
  }
  const obj3 = { [closure_4.DISCLOSURE]: obj4 };
  cResult[3] = adCreativeType;
  cResult[4] = cosponsorName;
  cResult[5] = gamePublisher;
  cResult[6] = gameTitle;
  cResult[7] = isTargetedDisclosure;
  cResult[8] = isVideoQuest;
  cResult[9] = obj3;
  tmp7 = obj3;
}) : (function QuestDisclosureModal(arg0) {
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: closure_5 } = arg0);
  function onClose() {
    return isTargetedDisclosure(gamePublisher[3]).hideModal();
  }
  const obj2 = {
    screens: {
      [closure_4.DISCLOSURE]: {
        headerLeft,
        headerRight: function blank() {
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
        headerRight: function blank() {
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