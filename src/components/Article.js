import React from "react";

function Article({ title, date, preview }) {
  const calculateReadTime = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <small>{calculateReadTime(25)}</small> {/* Example read time, replace with actual time */}
    </article>
  );
}

export default Article;
