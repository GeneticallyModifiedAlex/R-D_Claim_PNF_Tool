# Part 1. Imitation
## Structure
The simplest way to be able to copy something (style or otherwise) is to copy it.

The spec has specified that the new site should 'look like Queen's Lane Consultants.

When it comes to the web that comes down to a few things.

1. Colour
2. Font
3. Size
4. Padding & Margin
5. Space

Copying and pasting the html did get me a certain amount of the way there as the html structure is compatible.
![Pasted image 20250324214148](Pasted%20image%2020250324214148.png)
This gave me the elements needed to populate the questions without the styling.

## Style
Next I examined the styles that were present on the calculator and which were actively being used.
I found that the majority of the style i needed came from https://queenslc.com/hs-fs/hubfs/hub_generated/module_assets/1/114206314976/1741923534952/module_rd-calculator.min.css

A style sheet linked and applied to the page.
I found this and others linked directly and examined the styles present.

Copying the code gave me the colour, font and padding that i needed for the page.
And so i placed it in a linked css file i was locally using to play with later.

After configuring some things and removing unused code I was left with this.
![Pasted image 20250324214752](Pasted%20image%2020250324214752.png)
The colours, spacing and formatting are correct with additionally the correct font.
(You will notice that there are 2 different pages shown together, this is because on the actual page the Hide/ Show functionality does not remove the content from the page, only changes if it is displayed. As this has not been completed yet this will be shown still)
## Substance
The hide / show functionality of the Queen's Lane site comes from this url `https://144869564.fs1.hubspotusercontent-eu1.net/hubfs/144869564/hub_generated/module_assets/1/114206314976/1741197640770/module_rd-calculator.js`

Upon some background it was identified that Hubspot is platform that (among other things) allows users to customize content for their front end of their site and add behaviors to the site (in this case, hiding and showing content)

Based on the url this hiding of the calculator was likely configured within hubspot and then added to the site after. Re-examining the code on the site confirms my suspicions as the prefix `hs` is used on various variables likely short for hubspot.

This should be noted for any recreation of the code as non-functional and thus not needed to copy over.

The showing / hiding of the content is accomplished with these 2 lines (and the inverse when )

```javascript
  // Show results and hide form
  document.getElementById('rd-calculator').style.display = 'none';
  document.getElementById('resultsContainer').style.display = 'block';
```

The same method can be used in the new version as it this used vanilla JS and not JQuery.
# Part 2. Creation
## Structure
According to the spec provided I've created the following questions in the order specified.
![Pasted image 20250324223107](Pasted%20image%2020250324223107.png)
## style
### Appear/ disappear
Firstly the spec specifies that the questions should show/ appear based on the answers given by the use (thus in a hidden state by default apart from the 1st question).

The easiest implementation is to add a class to the other questions of `hidden` and then modify the state of the value based on javascript, but similar effects can be achieved using the `:first-child` pseudo class. As I am currently ill and not feeling well I will be doing this the quick way.

```css
.hidden { display: none; }
.step { margin-bottom: 20px; }
```

20px was choosen after the gap variable used for the form-groups in the original.

each step in the process is also given an id.
```html
<div class="step hidden" id="step2">

<label>On what date did you file the last claim? (DD/MM/YYYY)</label><br>

<input type="date" id="lastClaimDate" placeholder="DD/MM/YYYY">

</div>
```

This allows each questions to be targeted properly by the previously established method of showing / hiding elements.
### Imitation part 2 : return of the colour codes
Note:

This part was completed after ensuring that the java script portion was operational

## Substance
For simplicity i created a script tag within the main file (`indexx.html` as it was temporarily named)
The first thing that is required is to fetch all the elements I need, as I'm not expecting them to be removed from the page `const`'s make sense to use

```javascript 
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');
const result = document.getElementById('result');
```

Next I need the ability to show an individual step as this is a repeated function that needs to be called a function makes sense. At a larger scale it would make sense for this to be a helper function available site wide.

```javascript
    function removeHiddenClass(element) {
      element.classList.remove('hidden');
    }
```

I also needed a way to hide if a previous question in the process removed the chance of the user continuing.

```javascript
    function hideAllAfter(step) {
      [step1, step2, step3, step4, step5, result].forEach((el, i) => {
        if (i >= step) el.classList.add('hidden');
      });
    }
```

Now that i had a way to show the previously hidden fields i needed to build some basic logic.
Once i get the needed input i need to check for a change event. I've writen this input change function so that if the values change again the same code can be rerun.

This way the questions after this one can be shown or hidden as required by the flow chart provided.

```javascript
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
```

As you can see the values changing will either prompt the user to the next question.

![Pasted image 20250324225423](Pasted%20image%2020250324225423.png)

or output the needed text
![Pasted image 20250324230322](Pasted%20image%2020250324230322.png)
