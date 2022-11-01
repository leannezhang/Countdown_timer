# Countdown Timer Question

Create a countdown timer that allows the user to enter hours, minutes, and seconds.
Once the timer has started, the input fields should be replaced with plain text that updates every second. The 'Start' button should be replaced with 'Pause' and 'Reset' buttons.
![Countdown-timer-1](https://frontendeval.com/images/countdown-timer-1.png)

Once the timer completes, it should alert the user with a native notification (using the Notification API), or fallback to an alert.
![Countdown-timer-1](https://frontendeval.com/images/countdown-timer-2.png)

# Requirements
1. The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labelled to a screen reader
2. The input fields should use placeholder text as shown in the screenshot above
3. Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons
4. Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button
5. Pressing 'Reset' should revert the app back to the initial state
6. While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1)
7. When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete
8. If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero

# Solution
Check out Sandbox --> https://codesandbox.io/s/github/leannezhang/React_coding_questions
