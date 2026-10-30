// discord_app/modules/connections/authorizeConnection.native.tsx
import Constants from "../../Constants.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import Constants2 from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = Constants2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/authorizeConnection.native.tsx");

export default function authorizeConnection(overrideUrl) {
  ({ platformType, location: _location, onClose } = overrideUrl);
  let handleModalClose5 = onClose;
  overrideUrl = overrideUrl.overrideUrl;
  const successRedirect = overrideUrl.successRedirect;
  if (platformType === PlatformTypes.LEAGUE_OF_LEGENDS) {
    platformType = PlatformTypes.RIOT_GAMES;
  }
  if (null == _location) {
    _location = "mobile";
  }
  if (platformType === PlatformTypes.XBOX) {
    overrideUrl(5253).hideActionSheet();
    const obj15 = overrideUrl(5253);
    const tmp23 = overrideUrl;
    const items = [_location];
    overrideUrl(9701).showModal(items);
    if (null != onClose) {
      function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(572).unsubscribe("MODAL_POP", handleModalClose5);
      }
      handleModalClose5 = handleModalClose;
      const subscription = tmp23(572).subscribe("MODAL_POP", handleModalClose);
      const tmp23Result = tmp23(572);
    }
    const obj16 = overrideUrl(9701);
  } else {
    if (platformType !== PlatformTypes.PLAYSTATION) {
      if (platformType !== PlatformTypes.PLAYSTATION_STAGING) {
        if (platformType === PlatformTypes.CRUNCHYROLL) {
          overrideUrl(5253).hideActionSheet();
          const obj11 = overrideUrl(5253);
          const tmp15 = overrideUrl;
          const items1 = [_location];
          overrideUrl(14595).showModal(items1);
          if (null != onClose) {
            const handleModalClose4 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(572).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose4;
            const subscription1 = tmp15(572).subscribe("MODAL_POP", handleModalClose4);
            const tmp15Result = tmp15(572);
          }
          const obj12 = overrideUrl(14595);
        } else if (platformType === PlatformTypes.DOMAIN) {
          overrideUrl(5253).hideActionSheet();
          const obj8 = overrideUrl(5253);
          const tmp10 = overrideUrl;
          let obj = { locationStack: null };
          const items2 = [_location];
          obj.locationStack = items2;
          overrideUrl(6738).pushLazy(handleModalClose5(1995)(14606, dependencyMap.paths), obj);
          if (null != onClose) {
            const handleModalClose3 = function handleModalClose() {
              if (require != null) {
                tmp();
              }
              overrideUrl(572).unsubscribe("MODAL_POP", handleModalClose5);
            };
            handleModalClose5 = handleModalClose3;
            const subscription2 = tmp10(572).subscribe("MODAL_POP", handleModalClose3);
            const tmp10Result = tmp10(572);
          }
          const obj9 = overrideUrl(6738);
        } else {
          value = overrideUrl(6568).get(platformType);
          let isFederated;
          if (value != null) {
            isFederated = value.isFederated;
          }
          if (true === isFederated) {
            tmp28(5253).hideActionSheet();
            const tmp28Result = tmp28(5253);
            const obj2 = { platformType, location: _location, successRedirect };
            tmp28(6738).pushLazy(handleModalClose5(1995)(14608, dependencyMap.paths), obj2);
            if (null != onClose) {
              const handleModalClose2 = function handleModalClose() {
                if (require != null) {
                  tmp();
                }
                overrideUrl(572).unsubscribe("MODAL_POP", handleModalClose5);
              };
              handleModalClose5 = handleModalClose2;
              const subscription3 = tmp28(572).subscribe("MODAL_POP", handleModalClose2);
              const tmp28Result5 = tmp28(572);
            }
            const tmp28Result4 = tmp28(6738);
          } else {
            if (null != overrideUrl) {
              if (platformType === closure_3) {
                const obj4 = {
                  shouldConfirm: true,
                  href: overrideUrl,
                  onConfirm() {
                    LinkingDefault.openURL(overrideUrl);
                  },
                };
                handleModalClose5(8931).handleClick(obj4);
                const obj3 = handleModalClose5(8931);
              }
            }
            const obj5 = { location: _location, successRedirect };
            const tmp28Result6 = tmp28(7341);
            tmp28(7341)
              .authorize(platformType, obj5)
              .then((body) => {
                const url = body.body.url;
                if (null != url) {
                  overrideUrl(5704).openURL(url);
                  const obj = overrideUrl(5704);
                }
              });
            const authorizeResult = tmp28(7341).authorize(platformType, obj5);
          }
          const obj18 = overrideUrl(6568);
        }
      }
    }
    overrideUrl(5253).hideActionSheet();
    const obj13 = overrideUrl(5253);
    const tmp19 = overrideUrl;
    const items3 = [_location];
    overrideUrl(14584).showModal(items3, platformType);
    if (null != onClose) {
      handleModalClose5 = function handleModalClose() {
        if (require != null) {
          tmp();
        }
        overrideUrl(572).unsubscribe("MODAL_POP", handleModalClose5);
      };
      const subscription4 = tmp19(572).subscribe("MODAL_POP", handleModalClose5);
      const tmp19Result = tmp19(572);
    }
    const obj14 = overrideUrl(14584);
  }
}
