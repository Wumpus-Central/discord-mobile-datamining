// _runtime/metro/12829__.js
function noop() {}

export default (type, enter, arg2) => {
  closure_0 = arg2;
  enter = noop;
  let leave = noop;
  if (typeof enter === "function") {
    let tmp4 = noop;
    let tmp5 = enter;
    let tmp6 = noop;
    let tmp7 = enter;
    let tmp8 = noop;
    let tmp9 = enter;
  } else {
    tmp4 = noop;
    tmp5 = noop;
    tmp6 = noop;
    tmp7 = noop;
    tmp8 = noop;
    tmp9 = noop;
    if (enter) {
      enter = enter.enter;
      let tmp2 = noop;
      if (typeof enter === "function") {
        tmp2 = enter;
      }
      enter = tmp2;
      leave = enter.leave;
      let tmp3 = noop;
      if (typeof leave === "function") {
        tmp3 = leave;
      }
      leave = tmp3;
      tmp4 = tmp3;
      tmp5 = tmp2;
      tmp6 = tmp3;
      tmp7 = tmp2;
      tmp8 = tmp3;
      tmp9 = tmp2;
    }
  }
  if (tmp9 === noop) {
    if (tmp8 === noop) {
      const _Error3 = Error;
      let error = new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      throw error;
    }
  }
  function walk(term) {
    const call = enter.call;
    if (typeof call === "unknown") {
      enter(term);
    } else {
      call(closure_0, term);
    }
    switch (term.type) {
      case "Group":
        const terms = term.terms;
        const item = terms.forEach(walk);
        const call2 = leave.call;
        if (typeof call2 === "unknown") {
          leave(term);
        } else {
          call2(closure_0, term);
        }
        break;
      case "Multiplier":
        walk(term.term);
        break;
      case "Type":
        break;
      case "Property":
        break;
      case "Keyword":
        break;
      case "AtKeyword":
        break;
      case "Function":
        break;
      case "String":
        break;
      case "Token":
        break;
      case "Comma":
        break;
      default:
        const _Error = Error;
        const error = new Error("Unknown type: " + term.type);
        throw error;
    }
  }
  let call = tmp7.call;
  if (typeof call === "unknown") {
    tmp7(type);
  } else {
    call(arg2, type);
  }
  switch (type.type) {
    case "Group":
      let terms = type.terms;
      let item = terms.forEach(walk);
      const call4 = tmp6.call;
      if (typeof call4 === "unknown") {
        tmp6(type);
      } else {
        call4(arg2, type);
      }
      break;
    case "Multiplier":
      const term = type.term;
      let call2 = tmp5.call;
      if (typeof call2 === "unknown") {
        tmp5(term);
      } else {
        call2(arg2, term);
      }
      switch (term.type) {
        case "Group":
          const terms1 = term.terms;
          const item1 = terms1.forEach(walk);
          const call3 = tmp4.call;
          if (typeof call3 === "unknown") {
            tmp4(term);
          } else {
            call3(arg2, term);
          }
          break;
        case "Multiplier":
          walk(term.term);
          break;
        case "Type":
          break;
        case "Property":
          break;
        case "Keyword":
          break;
        case "AtKeyword":
          break;
        case "Function":
          break;
        case "String":
          break;
        case "Token":
          break;
        case "Comma":
          break;
        default:
          let _Error = Error;
          const error1 = new Error("Unknown type: " + term.type);
          throw error1;
      }
      break;
    case "Type":
      break;
    case "Property":
      break;
    case "Keyword":
      break;
    case "AtKeyword":
      break;
    case "Function":
      break;
    case "String":
      break;
    case "Token":
      break;
    case "Comma":
      break;
    default:
      const _Error2 = Error;
      const error2 = new Error("Unknown type: " + type.type);
      throw error2;
  }
};
