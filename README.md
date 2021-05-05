# Project Goals
- Create a react project with create-react-app bootstrap.
- Create tests using TDD (red and green methodology).
- Create a simple interface to pass in these tests.

# Libraries
When you start an app with create-react-app, it already came with test libraries:
```
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
```

# Test-Driven Development
The main idea when you use this technique is to make the tests fail first.
That means you need to know what the new feature needs to do and thinking about it
you will create a test.
Therefore, this test will fail and you will need to create a resource to pass the test.
When you achieve success in the test created with the new built feature, the goal has been achieved.

![image](https://user-images.githubusercontent.com/73957838/117211632-a69bdc80-adcf-11eb-973a-5b847a113688.png)

# Structure
Only one componet was builded to show the idea.
So I created a folder called Counter that will organize all file relationships with this component.
The Counter.jsx file have the JavaScript code that build the component.
The Counter.css take care about the styles.
And inner this folder we have another called __test__ that will organize the tests for Counter.
