// discord_app/modules/unique_usernames/UniqueUsernamesUtils.tsx
import { t } from "../../../_runtime/04544_t.js";
const result = require("getSystemLocale").fileFinishedImporting("modules/unique_usernames/UniqueUsernamesUtils.tsx");

export const formatUsernameLiveCheckValidation = function formatUsernameLiveCheckValidation(arg0) {
  const match = t.match(arg0);
  const str = t;
  let obj = { error: null };
  const P = t.P;
  obj[0] = P.not(t.P.nullish);
  const withResult = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14080).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  });
  const withResult1 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14080).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14080).NameValidationState.ERROR, message: error.error }));
  const withResult2 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14080).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14080).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14080).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  });
  obj = { error: t.P.nullish };
  const withResult3 = match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14080).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14080).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14080).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14080).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  });
  return match.with({ rateLimited: true }, () => {
    const obj = { type: callback(14080).NameValidationState.RATE_LIMIT, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.T15lqn);
    return obj;
  }).with(obj, (error) => ({ type: callback(14080).NameValidationState.ERROR, message: error.error })).with({ taken: false }, () => {
    const obj = { type: callback(14080).NameValidationState.AVAILABLE, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.PgfBSx);
    return obj;
  }).with({ taken: true }, () => {
    const obj = { type: callback(14080).NameValidationState.ERROR, message: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.mCrAUb);
    return obj;
  }).with(obj, () => ({ type: callback(14080).NameValidationState.INTERNAL_ERROR, message: "" })).otherwise(() => {

  });
};