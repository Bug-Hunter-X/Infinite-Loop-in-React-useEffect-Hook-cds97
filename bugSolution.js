```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic to prevent the infinite loop
    if (count > 5) {
      //Instead of directly setting the count to 0, we use a callback function that takes the previous state into account.
      setCount(prevCount => 0);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```