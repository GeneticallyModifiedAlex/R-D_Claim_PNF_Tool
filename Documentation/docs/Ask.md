Please Note:
I understand that what you want to determine is: 
1. If i can complete tasks 
2. If my ways of working are compatible with yours

Ask such I am pretending this to be a larger task than it actually is (where the easiest thing is to simply build the form) and demonstrating how I approach larger and more complex problems.


Provided by Rachel Constant-Taylor 
Build a tool to guide users through a series of questions to determine if they need to pre-notify HMRC (PNF) for their R&D Claim. 

# Goals
- Use only Vanilla JavaScript, HTML  and CSS
- Hide and show questions based in user responses in the Question Flow
	- Structured Form with Dynamic fields
- Have correct Date Based Logic for the System
- Display either "PNF Required" or "No PNF required" Correctly based on inputs
- Be user friendly
- 'Fit Seamlessly within a web page''
- Have a style and layout similar to [Queen's Lane Consultants](https://queenslc.com/resources/r-and-d-tax-credit-calculator/)
- "Capture" users responses (possible analytics integration Google Analytics 4 would have a suitable integration upon deployment)
# Output
- A form that the user will be able to interact with in their desktop 
- A form that the user will be able to use their Mobile browser to interact with
- A form that hides and shows questions based on Responses they have provided in the Question Flow
- A form and site page that has similar Styling as [Queen's Lane Consultants](https://queenslc.com/resources/r-and-d-tax-credit-calculator/)
- A form with a Responsive Layout for both Desktop and mobile
- A form that displays either "PNF Required" or "No PNF required" correctly
- Code that can be embedded into a web page
# Effort

- [x] Define GOE
- [x] Build a basic HTML Page
- [x] Build a reset.css and none.css to remove default styling
- [x] Identify the [Font and Colours needed](Analysis%20of%20Queen's%20Lane%20Consultants%20Site)
- [ ] Create a root.css with the variables needed for styling(root in index.css may be sufficient)
- [x] Build a form with the fields needed
- [ ] Ensure datatype and aria is noted for accessibility on mobile and screen reader
- [ ] Test connection between logic file and the form (colour change or text document write is fine)
- [x] Write functions to Determine the PNF Logic
	- [ ] Return a json object with details required
- [ ] Test PNF Logic on the form
- [ ] Add styling to the form
