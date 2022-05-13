const cashRegister = (price, cash) => {
  const UNIT_AMOUNT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "FIFTY": 50.00,
    "ONE HUNDRED": 100.00
  }
  let change = [];
  if (cash < price) {
    return 'ERROR';
  }
  if (cash === price) {
    return 'ZERO';
  }
  let cashBack = cash - price;
  while (cashBack > 0.01) {
    if (cashBack >= 100.0) {
      change.push('ONE HUNDRED');
      cashBack -= 100.0;
    } else {
      if (cashBack >= 50.0) {
        change.push('FIFTY');
        cashBack -= 50.0;
      } else {
        if (cashBack >= 20.0) {
          change.push('TWENTY');
          cashBack -= 20.0;
        } else {
          if (cashBack >= 10.0) {
            change.push('TEN');
            cashBack -= 10.0;
          } else {
            if (cashBack >= 5.0) {
              change.push('FIVE');
              cashBack -= 5.0;
            } else {
              if (cashBack >= 2.0) {
                change.push('TWO');
                cashBack -= 2.0;
              } else {
                if (cashBack >= 1.0) {
                  change.push('ONE');
                  cashBack -= 1.0;
                } else {
                  if (cashBack >= 0.5) {
                    change.push('HALF DOLLAR');
                    cashBack -= 0.5;
                  } else {
                    if (cashBack >= 0.25) {
                      change.push('QUARTER');
                      cashBack -= 0.25;
                    } else {
                      if (cashBack >= 0.1) {
                        change.push('DIME');
                        cashBack -= 0.1;
                      } else {
                        if (cashBack >= 0.05) {
                          change.push('NICKEL');
                          cashBack -= 0.05;
                        } else {
                          change.push('PENNY');
                          cashBack -= 0.01;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    change.push(',');
  }
  change.length = change.length-1;
  return change.join('')
};

