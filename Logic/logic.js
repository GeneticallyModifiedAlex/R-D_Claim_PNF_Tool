const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');
const result = document.getElementById('result');

function removeHiddenClass(element) {
  element.classList.remove('hidden');
}

function hideAllAfter(step) {
  [step1, step2, step3, step4, step5, result].forEach((el, i) => {
    if (i >= step) el.classList.add('hidden');
  });
}

// Step 1
document.querySelectorAll('input[name="claimedBefore"]').forEach(input => {
  input.addEventListener('change', () => {
    hideAllAfter(1);
    if (input.value === 'yes') {
      removeHiddenClass(step2);
    } else {
      result.innerHTML = '<strong>PNF Required</strong>';
      removeHiddenClass(result);
    }
  });
});

// Step 2
document.getElementById('lastClaimDate').addEventListener('change', () => {
  hideAllAfter(2);
  removeHiddenClass(step3);
});

// Step 3
//listener set to end date so that both can be entered before next question appears
document.getElementById('startDate').addEventListener('change', () => {
  const startLimit = new Date('2023-04-01');
  hideAllAfter(3);
  let start = new Date(parseDate(document.getElementById('startDate').value));
  if (start  > startLimit) {
    removeHiddenClass(step4);
  } else {
    result.innerHTML = '<strong>No PNF Required</strong>';
    removeHiddenClass(result);
  }
});

// Step 4
document.querySelectorAll('input[name="filingType"]').forEach(input => {
  input.addEventListener('change', () => {
    hideAllAfter(4);
    if (input.value === 'amended') {
      removeHiddenClass(step5);
    } else {
      result.innerHTML = '<strong>No PNF Required</strong>';
      removeHiddenClass(result);
    }
  });
});

// Step 5
document.querySelectorAll('input[name="claimedBeforeEarlier"]').forEach(input => {
  input.addEventListener('change', () => {
    hideAllAfter(5);
    if (input.value === 'yes') {
      alert("Now input the data for your previous claim.");
      removeHiddenClass(step3);
    } else {
      result.innerHTML = '<strong>PNF Required</strong>';
      removeHiddenClass(result);
    }
  });
});

function parseDate(str) {
  const parts = str.split('/');
  if (parts.length === 3) {
    const [dd, mm, yyyy] = parts.map(Number);
    return new Date(yyyy, mm-1, dd);
  }
  return null;
}