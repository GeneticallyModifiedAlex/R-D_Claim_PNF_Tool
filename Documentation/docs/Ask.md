Please Note:
I understand that what you want to determine is: 
1. If i can complete tasks 
2. If my ways of working are compatible with yours

Ask such I am pretending this to be a larger task than it actually is (where the easiest thing is to simply build the form) and demonstrating how I approach larger and more complex problems.

All documentation was written with Obsidian.md a tool of my preference; formatting may vary slightly but all should be comparable. 

`[[Word]]` count as links to other documents.

![[Tech Task - Interactive R&D PNF-1.pdf]]


Provided by [[Rachel Constant-Taylor]]  
Build a tool to guide users through a series of questions to determine if they need to pre-notify HMRC (PNF) for their [[Research and Development|R&D]] [[Research and Development Claim|Claim]]. 

# Goals
- Use only Vanilla [[JavaScript]], [[HTML]]  and [[CSS]]
- Hide and show questions based in user responses in the [[Question Flow]] ([[How hiding and showing content works]])
	- [[Structured Form with Dynamic fields]]
- Have correct [[Date Based Logic for the System]]
- Display either "PNF Required" or "No PNF required" Correctly based on inputs
- Be user friendly
- ''[[Fit Seamlessly within a web page]]''
- Have a style and layout similar to [Queen's Lane Consultants](https://queenslc.com/resources/r-and-d-tax-credit-calculator/)
- "Capture" users responses (possible analytics integration [[Google Analytics 4]] would have a suitable integration upon deployment)
# Output
- A form that the user will be able to interact with in their desktop 
- A form that the user will be able to use their Mobile browser to interact with
- A form that hides and shows questions based on Responses they have provided in the [[Question Flow]]
- A form and site page that has similar [[Styling Guide|Styling]] as [Queen's Lane Consultants](https://queenslc.com/resources/r-and-d-tax-credit-calculator/)
- A form with a Responsive Layout for both Desktop and mobile
- A form that displays either "PNF Required" or "No PNF required" correctly
- Code that can be embedded into a web page
# Effort
## Phase 1: MVP
Phase required for base functionality and where future improvements are also mapped (thus accurate estimates can be given on future phases)

- [x] Define GOE
- [ ] Build a basic HTML Page
- [ ] Build a reset.css and none.css to remove default styling
- [ ] Identify the [[Analysis of Queen's Lane Consultants Site|Font and Colours needed]]
- [ ] Create a root.css with the variables needed for styling(root in index.css may be sufficient)
- [ ] Research [[HMRC Prenotify (PNF)]]
- [ ] Research [[R&D Claims]]
- [ ] Map the [[PNF Logic]] on page 3 of [[Tech Task - Interactive R&D PNF-1.pdf]] 
- [ ] Build a form with the fields needed
- [ ] Ensure datatype and aria is noted for accessibility on mobile and screen reader
- [ ] Test connection between logic file and the form (colour change or text document write is fine)
- [ ] Write functions to Determine the [[PNF Logic]]
	- [ ] Return a json object with details required
- [ ] Test [[PNF Logic]] on the form
- [ ] Add styling to the form
## Phase 2
- [ ] Show 2nd "screen" to display estimated benifit
	- [ ] make a 'Hide the input screen' response to the submit button
	- [ ] Map json values with values shown in [[Analysis of Queen's Lane Consultants Site]] 
- [ ] allow user to return the a blank form to edit values (button click)
	- [ ] show the input screen and hide the summary screens
- [ ] Allow the showing of a detailed breakdown
	- [ ] Create a table
		- [ ] Map calculated values