import Layout from "../../components/auth/Layout";
import StyleProductTable from "../../components/common/Table";
import StyleTextInput from "../../components/common/Input/Text";

export default function ProductRegister() {
    return (
        <Layout>
            <h2 className="font-bold text-2xl">상품등록</h2>
            <form>
                <StyleProductTable>
                    <h3>기본 정보</h3>
                    <table>
                        <caption>상품 등록</caption>
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>상품 등록</th>
                                <td>
                                    <StyleTextInput
                                        className="w-full"
                                        placeholder="예시) 플라워 미니 원피스, 원피스 1위상품"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>상품요약설명</th>
                                <td>
                                    <StyleTextInput
                                        className="w-full"
                                        placeholder="예시) 주문폭주!! 페미닌한 원피스 Free, L, XL까지~~"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>상품상세설명</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </StyleProductTable>
                <StyleProductTable>
                    <h3>판매 정보</h3>
                    <table>
                        <caption>판매 정보</caption>
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>판매가</th>
                                <td>
                                    <StyleTextInput />원
                                </td>
                            </tr>
                            <tr>
                                <th>할인</th>
                                <td>
                                    <div>
                                        <label htmlFor="sale_label1">설정함</label>
                                        <input type="radio" id="sale_label1" name="sale" />
                                        <label htmlFor="sale_label2">설정안함</label>
                                        <input type="radio" id="sale_label2" name="sale" />
                                    </div>
                                    <div>
                                        <div>
                                            <StyleTextInput />
                                            <select name="" id="">
                                                <option value="원">원</option>
                                                <option value="%">%</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="checkbox" />
                                                특정기간만 할인
                                            </label>
                                        </div>
                                        <div>달력 라이브러리</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </StyleProductTable>
            </form>
        </Layout>
    );
}
