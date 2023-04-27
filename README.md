# msc_1202_assignment

Assignment - Component based Software Development

Introduction:
The Budget Allocation React Application is a simple application developed using ReactJS that allows the user to manage and track budget allocations for a company. This application includes components that allow users to add expenses, view the total expenses, budget, remaining budget, and currency conversions.

Development Process:
The development process of this application involved the following steps,

Planning and defining the application requirements and user stories:
The first step in the development process was to plan and define the application requirements and user stories. This involved identifying the core features of the application, such as the ability to add expenses, view the total expenses, budget, and remaining budget, and the ability to select a currency for the budget allocations.

Setting up the development environment:
Once the application requirements were defined, the next step was to set up the development environment. This involved installing the required packages and dependencies, including ReactJS and Bootstrap, and creating the basic file structure for the application.

Creating the basic file structure for the application:
The basic file structure for the application included the index.js file, which served as the entry point for the application, and the App.js file, which was the main component of the application. Other directories, such as the context directory and the components directory, were also created.

Defining and implementing the required components for the application:
After setting up the basic file structure, the required components for the application were defined and implemented. These included components such as Budget, ExpenseTotal, ExpenseList, AllocationForm, Remaining, and Currency.

Implementing the context API for state management across components:
To manage state across components, the context API was implemented. This allowed the state to be managed at the top-level of the application and accessed by all components that required it.

Styling the application using CSS and Bootstrap:
Once the components were implemented, the application was styled using CSS and Bootstrap. This helped to create a consistent and visually appealing user interface.

Testing the application to ensure it meets the requirements and is functioning correctly:
After implementing and styling the application, it was tested to ensure it met the requirements and was functioning correctly. This involved testing the functionality of each component and ensuring that the state was being managed correctly across components.

Code Base:
The code base for the Budget Allocation React Application is structured as follows:

- The index.js file serves as the entry point for the application and renders the main App component.
- The App.js file is the main component of the application and imports the required components and context provider from their respective directories.
- The context directory contains the AppContext.js file, which defines the context API and manages the state across the components.
- The components directory contains the Budget.js, ExpenseTotal.js, ExpenseList.js, AllocationForm.js, Remaining.js, and Currency.js files, which define and implement the required components for the application.
- The App.css file contains the CSS styling for the application.
- The package.json file contains the dependencies required for the application.

Component Details:

1. Budget Component:The Budget component is responsible for displaying the budget for the company. It is implemented as a functional component and uses the useContext hook to access the budget state from the context API. The budget value is displayed using the Bootstrap card component.
2. ExpenseTotal Component:The ExpenseTotal component is responsible for displaying the total expenses for the company. It is implemented as a functional component and uses the useContext hook to access the expenses state from the context API. The total expenses value is displayed using the Bootstrap card component.
3. ExpenseList Component:The ExpenseList component is responsible for displaying the list of expenses for the company. It is implemented as a functional component and uses the useContext hook to access the expenses state and the deleteExpense function from the context API. The list of expenses is displayed using the Bootstrap table component.
4. AllocationForm Component:The AllocationForm component is responsible for allowing the user to add a new expense to the company's budget allocation. It is implemented as a class component and uses the setState hook to manage the state of the form inputs. The new expense is added to the expenses state using the addExpense function from the context API.
5. Remaining Component:The Remaining component is responsible for displaying the remaining budget for the company. It is implemented as a functional component and uses the useContext hook to access the budget and expenses state from the context API. The remaining budget value is calculated and displayed using the Bootstrap card component.
6. Currency Component:The Currency component is responsible for allowing the user to select the currency for the company's budget allocation. It is implemented as a functional component and uses the useContext hook to access the currency state and the setCurrency function from the context API. The user can select the currency from a dropdown menu, which updates the currency state when a new currency is selected.
