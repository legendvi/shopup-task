export default function GridCard(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        {props.data.map((item, index) => {
          return (
            <div key={index} className="col">
              <div className="card ">
                <object height="280rem" data={item.images.original.url}>
                  Image
                </object>

                <div className="card-body">
                  <h5 className="card-title">
                    {item.title ? item.title : "Title is not Available"}
                  </h5>
                  <p className="card-text">
                    <p>
                      <b>Type: </b>
                      {item.type ? item.type : "Type is not Available"}
                    </p>
                    <p>
                      <b>Source: </b>
                      {item.source_tld
                        ? item.source_tld
                        : "No Source Available"}
                    </p>
                    <p>
                      <b>Rating: </b>
                      {item.rating ? item.rating : "No Rating Available"}
                    </p>
                    <p>
                      <b>Import Date: </b>
                      {item.import_datetime
                        ? item.import_datetime.substring(0, 10)
                        : "No Import Date Available"}
                    </p>
                    <p>
                      <b>Trending Date: </b>
                      {item.trending_datetime.substring(0, 3) === "000"
                        ? "Not Available"
                        : item.trending_datetime.substring(0, 10)}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
