// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04809_AssetRegistry.js";
import NavigatorHeader2 from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators.tsx";
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const constants = { DISCLOSURE: "disclosure" };
let ReactCompilerGating = ReactCompilerGating_mod;
const headerLeft = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp5;
      let obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = QuestDisclosureModalActionCreatorsDefault;
          return obj.hideModal();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        const intl = intl2.intl;
        const tmp8 = (
          <HeaderActionButton
            source={AssetRegistryDefault}
            onPress={first}
            accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
          />
        );
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      const intl = intl2.intl;
      return (
        <HeaderActionButton
          source={AssetRegistryDefault}
          onPress={function onPress() {
            const obj = QuestDisclosureModalActionCreatorsDefault;
            return obj.hideModal();
          }}
          accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (adCreativeType) => {
      let gamePublisher;
      let obj3;
      let obj = adCreativeType(gamePublisher[2]);
      const cResult = obj.c(13);
      adCreativeType = adCreativeType.adCreativeType;
      const isTargetedDisclosure = adCreativeType.isTargetedDisclosure;
      gamePublisher = adCreativeType.gamePublisher;
      const gameTitle = adCreativeType.gameTitle;
      const cosponsorName = adCreativeType.cosponsorName;
      const isVideoQuest = adCreativeType.isVideoQuest;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const obj = isTargetedDisclosure(gamePublisher[3]);
          return obj.hideModal();
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
      const obj2 = { [closure_4.DISCLOSURE]: obj3 };
      obj3 = {
        headerLeft: isVideoQuest,
        headerRight: C,
        headerTitle: tmp5,
        render() {
          return jsx(QuestDisclosureModalInnerDefault, {
            adCreativeType,
            isTargetedDisclosure,
            gamePublisher,
            gameTitle,
            onClose,
            cosponsorName,
            isVideoQuest,
          });
        },
      };
      cResult[3] = adCreativeType;
      cResult[4] = cosponsorName;
      cResult[5] = gamePublisher;
      cResult[6] = gameTitle;
      cResult[7] = isTargetedDisclosure;
      cResult[8] = isVideoQuest;
      cResult[9] = obj2;
    }
  : (arg0) => {
      let adCreativeType;
      let closure_4;
      let closure_5;
      let cosponsorName;
      let gamePublisher;
      let gameTitle;
      let isTargetedDisclosure;
      let isVideoQuest;
      ({
        adCreativeType: require,
        isTargetedDisclosure: importDefault,
        gamePublisher: dependencyMap,
        gameTitle: jsx,
        cosponsorName: closure_4,
        isVideoQuest: closure_5,
      } = arg0);
      function onClose() {
        const obj = QuestDisclosureModalActionCreatorsDefault;
        return obj.hideModal();
      }
      let obj = {
        headerLeft,
        headerRight() {
          return null;
        },
        headerTitle() {
          const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
          const intl = intl2.intl;
          return <NavigatorHeader title={intl.string(intl2.t.GcsZKJ)} />;
        },
        render() {
          return jsx(QuestDisclosureModalInnerDefault, {
            adCreativeType: require,
            isTargetedDisclosure: importDefault,
            gamePublisher: dependencyMap,
            gameTitle: jsx,
            onClose,
            cosponsorName,
            isVideoQuest,
          });
        },
      };
      const Navigator = Navigator2.Navigator;
      let intl = intl2.intl;
      return (
        <Navigator
          screens={{ [closure_4.DISCLOSURE]: obj }}
          initialRouteName={constants.DISCLOSURE}
          headerBackTitle={intl.string(intl2.t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default tmp2;
