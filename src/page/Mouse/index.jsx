import React, { useState, useEffect } from "react";
import "../../page/Laptop/index.css";
import { Link } from "react-router-dom";
import Image from "../../assets/images/introduction.jpg";
import Image1 from "../../assets/images/introduction1.jpg";
import Image2 from "../../assets/images/introduction2.jpg";
import Image3 from "../../assets/images/introduction3.jpg";
import { request1 } from "../../utils/request";

function Mouse() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await request1.get("goods/4/getByCategoryId");
      setProducts(response.data);
    };
    fetch();
  }, []);

  const renderProduct = (product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <div className="product-card">
          <div style={{paddingLeft: "75px"}}><img className="product-image" src={`http://127.0.0.1:8888/${product.image}`} alt={product.name} /></div>
          <p style={{ fontWeight: "bold" }}>{product.goodName}</p>
          <div className="colors">
            <p>Màu: {product.color}</p>
          </div>
          <span className="price-range"><span style={{color: "black", fontWeight: "bold"}}>Chỉ từ: </span>{product.price}VND</span>
        </div>
      </Link>
  );

  return (
    <div className="test">
      <div className="product-grid">
        {products.map((product) => renderProduct(product))}
      </div>
      <div className="introduction">
        <p style={{ fontWeight: "bolder" }}>
        </p>
        <div className='introduction'>
        <p style={{fontWeight: "bolder"}}><i><span style={{color: "blue"}}>Laptop</span> đang trở thành thiết bị công nghệ "hot" đối với rất nhiều người tiêu dùng. Nhờ sự tiện lợi, đáp ứng tốt nhu cầu học tập, làm việc và giải trí của người dùng, laptop đã trở thành lựa chọn hàng đầu. Trong bối cảnh đó, các thương hiệu laptop không ngừng ra mắt những dòng laptop khác nhau để cạnh tranh.</i></p>
        <h1 style={{marginTop: "20px", marginBottom: "10px", color: "#11887c", fontWeight: "bolder"}}>GIỚI THIỆU VỀ LAPTOP</h1>
        <p>Sự ra đời và phát triển của máy tính laptop có thể được chia thành một số giai đoạn chính. Trong giai đoạn đầu từ 1970 đến 1980, những chiếc máy tính xách tay đầu tiên như Osborne 1 năm 1979 và Epson HX-20 năm 1981 đánh dấu sự khởi nguồn của loại hình này. </p>
        <p>Mặc dù vẫn còn rất nặng và kích thước lớn, những thiết bị này đã mở ra kỷ nguyên của máy tính có thể mang theo bên mình. Cuối những năm 1980, laptop bắt đầu phổ biến hơn với các mẫu như Compaq Portable và IBM Thinkpad, mở đường cho sự phát triển mạnh mẽ của chúng trong thập kỷ tiếp theo.</p>
        <img style={{margin: "10px 0px"}} src={Image} alt="" />
        <p>Trong giai đoạn phát triển từ 1990 đến 2000, laptop trở nên nhẹ hơn, mỏng hơn và có hiệu suất cao hơn. Các nhãn hiệu máy tính lớn như Dell, HP, Acer và Lenovo ra đời và chiếm lĩnh thị trường. Sự ra đời của màn hình LCD và công nghệ pin lithium-ion đã cải thiện đáng kể trải nghiệm người dùng. </p>
        <p>Trong giai đoạn hiện đại từ 2000 đến nay, laptop tiếp tục được nâng cấp liên tục về cấu hình, pin, thiết kế và tính năng để đáp ứng nhu cầu ngày càng cao của người dùng. Sự ra đời của các dòng máy tính xách tay siêu mỏng như ultrabook và 2 trong 1 đã khẳng định vị thế không thể thiếu của laptop trong cuộc sống hiện đại.</p>
        <h1 style={{marginTop: "20px", marginBottom: "10px", color: "#11887c", fontWeight: "bolder"}}>ƯU ĐIỂM CỦA LAPTOP</h1>
        <p>Những tính năng nổi bật này là lý do chính giải thích vì sao laptop vẫn thu hút được sự quan tâm và tin dùng rộng rãi từ người tiêu dùng như: </p>
        <p><span style={{fontWeight: "bolder"}}>Linh hoạt:</span> Có thể di chuyển đi bất kì nơi đâu, bỏ vào balo, túi xách hay mang theo đi du lịch đều được. Bên cạnh đó, laptop có thiết kế đa dạng các như hình vỏ sò, laptop 2 in 1 cho người dùng dễ dàng lựa chọn để phù hợp với nhu cầu sử dụng.</p>
        <p><span style={{fontWeight: "bolder"}}>Thời lượng pin lâu: </span>Có thể sử dụng laptop trong thời gian dài không cần sạc nguồn trực tiếp, phù hợp với người dùng bận rộn hay thường xuyên làm việc ngoài quán cà phê.</p>
        <p><span style={{fontWeight: "bolder"}}>Hệ điều hành tối ưu: </span>Các mẫu laptop hiện nay đều được trang bị hệ điều hành phù hợp và được tối ưu hoá về hiệu năng. Hơn nữa, những chiếc laptop này còn sở hữu cấu hình phần cứng mạnh mẽ, cùng với việc được thiết kế ở nhiều phân khúc khác nhau. </p>
        <img style={{margin: "10px 0px"}} src={Image2} alt="" />
        <p><span style={{fontWeight: "bolder"}}>Đầy đủ phụ kiện hỗ trợ: </span>Các dòng laptop được trang bị đầy đủ các phụ kiện kèm như bàn phím, chuột và các phụ kiện tiện lợi nhằm mang lại sự thuận tiện, nâng cao hiệu suất làm việc hơn.  </p>
        <p><span style={{fontWeight: "bolder"}}>Dễ dàng nâng cấp: </span>Khi sử dụng laptop, người dùng có thể dễ dàng sửa chữa, nâng cấp đơn giản nhằm mang đến hiệu năng vượt trội, đáp ứng tốt nhu cầu trong quá trình sử dụng.</p>
        <p><span style={{fontWeight: "bolder"}}>Lưu trữ nhiều dữ liệu: </span>Các ổ cứng trên laptop thường có dung lượng lớn, nhờ đó bạn có thể lưu trữ được nhiều dữ liệu một cách nhanh chóng.</p>
        <h1 style={{marginTop: "20px", marginBottom: "10px", color: "#11887c", fontWeight: "bolder"}}>CÁC LOẠI LAPTOP ĐANG PHỔ BIẾN HIỆN NAY</h1>
        <p>Laptop ngày nay đang được ưa chuộng rộng rãi, vì vậy người ta chia laptop thành 3 loại phổ biến. Mời bạn tham khảo để có thể chọn ra cho mình một chiếc laptop ưng ý:</p>
        <h2 style={{marginTop: "20px", marginBottom: "10px", color: "#b37f2a", fontWeight: "bolder"}}>Máy tính xách tay thông thường</h2>
        <p>Các dòng laptop thông thường thường được trang bị những tính năng cơ bản, đáp ứng nhu cầu sử dụng thông thường như lướt web, quản lý email và các công việc văn phòng nhẹ nhàng. Nhờ vào mức cấu hình vừa phải, những chiếc laptop này có mức giá khá phải chăng, phù hợp với nhiều đối tượng khách hàng.</p>
        <img style={{margin: "10px 0px"}} src={Image1} alt="" />
        <p>Laptop thông dụng thường sở hữu cấu hình ở mức trung bình, đủ để thực hiện các tác vụ cơ bản như truy cập internet, soạn thảo văn bản hay quản lý email. Nhờ vậy, mức giá của chúng cũng ở trong tầm với của đông đảo người dùng, từ học sinh, sinh viên cho tới các nhân viên văn phòng.</p>
        <h2 style={{marginTop: "20px", marginBottom: "10px", color: "#b37f2a", fontWeight: "bolder"}}>Laptop 2 in 1</h2>
        <p>Dòng laptop 2 in 1 như các dòng laptop Surface Pro sở hữu khả năng biến hóa linh hoạt giữa máy tính xách tay và máy tính bảng. Chỉ cần xoay bàn phím 360 độ hoặc tháo rời màn hình, người dùng đã có thể chuyển sang chế độ máy tính bảng, mang lại sự tiện dụng và đa năng.</p>
        <img style={{margin: "10px 0px"}} src={Image3} alt="" />
        <p>Các mẫu laptop 2 trong 1 thường có kích thước nhỏ gọn và thiết kế tinh tế, thuận tiện cho việc di chuyển. Tuy nhiên, sự kết hợp giữa tính năng máy tính bảng và laptop khiến cho giá bán của những chiếc laptop 2 in 1 này cao hơn so với các dòng laptop phổ thông.</p>
        </div>
      </div>
    </div>
  );
}

export default Mouse;