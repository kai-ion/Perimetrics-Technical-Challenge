# Step 1: Modify the "10" to Estimate PI

We need to calculate an estimate of PI using a method such as the numerical integration approach, specifically approximating the area under a quarter circle. In this case, the bars() function appears to generate the lengths of bars that could represent points along the arc of a quarter circle, which is suitable for a Monte Carlo-like estimation of PI.

## Changes Made

To implement this, replace `10` in the reduce function with the new calculation of PI formula below

Calculation of PI: The code now uses the formula 
(sum of bars × 4 / ( numberOfBars^2)) to calculate an estimate of PI.

`PI = {{ (bars().reduce((a, b) => a + b, 0) * 4 / (numberOfBars * numberOfBars))}}`

# Step 2: Format the output

The `.toFixed(3)` method ensures that the estimated value of PI is formatted to 3 decimal places, matching the (***) format requirement.

## Changes Made

`PI = {{ (bars().reduce((a, b) => a + b, 0) * 4 / (numberOfBars * numberOfBars)).toFixed(3) }}`

# Step 3: Dynamic value for the number of bars

To allow the user to select number of bars for 60 and 90 to dynamically change the numberOfBars in the Vue instance. We added a dropdown menu or buttons that let users select the number of bars.

Vue Data Binding: The `numberOfBars` property is bound to the dropdown, meaning when a user selects a different option, Vue will automatically update the data and re-render the UI accordingly

Now, when you select a different number of bars (30, 60, or 90), the visualization will adjust, and the estimated PI value will be recalculated and displayed with the selected number of bars

## Changes Made
Add a dropdown menu to the app
```html
<!-- Dropdown menu to select the number of bars -->
			<label for="bars">Select number of bars: </label>
			<select id="bars" v-model="numberOfBars">
				<option value="30">30</option>
				<option value="60">60</option>
				<option value="90">90</option>
			</select>
```