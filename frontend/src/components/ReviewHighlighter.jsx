export const ReviewHighlighter = ({ review }) => {
    
    function highlightConditionally(sentiment) {
        switch (sentiment) {
            case "Positive":
                return "#D9F2DD";
            case "Negative":
                return "#F2DBD9";
            case "Mixed":
                return "#e8bd6d3d";
            case "Neutral":
                return "#eaf09b6b";
            default:
                return "#FFFFFF";
        }
    }

    //converting nested array to simple array to make indexing easy
    const highlightIndices = review.analytics.flatMap(
        (analytic) => analytic.highlight_indices
    );

    //Starting with an empty string and concatenating along the way
    let fullReview = "";

    let repeatedPart = review.content.split("\n");
    let lastIndex = repeatedPart[0].length;

    //Extracting the part before the highlighted part
    highlightIndices.forEach(([start, end, sentiment]) => {
        if (start > lastIndex) {
            fullReview += review.content.slice(lastIndex, start);
        }

        //Rendering the text to be highlighted with the required highlighting
        const highlightedText = review.content.slice(start, end);
        const tooltipText = review.topic;

        fullReview +=
            '<span style= "background-color: ' +
            highlightConditionally(sentiment) +
            '" title="' +
            tooltipText +
            ' " >' +
            highlightedText +
            " </span>";

        //Setting the lastIndex mark to the current end index so as to move further in the review string.
        lastIndex = end;
    });

    //Checking if the review is completely rendered after the highlighted text is done rendering.
    //Adding the end part to the string if hasn't rendered.
    if (lastIndex < review.content.length) {
        fullReview += review.content.slice(lastIndex, review.content.length);
    }

    //Rendering the complete string with inline styling for span elements/text to be highlighted.
    return <div dangerouslySetInnerHTML={{ __html: fullReview }} />;
};