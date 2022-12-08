"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;
var _product = _interopRequireDefault(require("../../services/product.service"));
var _authentication = _interopRequireDefault(require("../../services/authentication.service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Controller {
  async addProduct(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await _authentication.default.verifyToken(token);
      if (decoded.id) {
        const product = await _product.default.createProduct(decoded.id, req.body);
        res.status(200).json(product._id);
      } else {
        res.status(401).json({
          message: "Unauthorized"
        });
      }
    } catch (err) {
      next(err);
    }
  }
  async addReview(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await _authentication.default.verifyToken(token);
      if (decoded.id) {
        const review = await _product.default.addReview(decoded.id, req.body);
        res.status(200).json(review._id);
      } else {
        res.status(401).json({
          message: "Unauthorized"
        });
      }
    } catch (err) {
      next(err);
    }
  }
  async getReview(req, res, next) {
    const review = await _product.default.getReview(decoded.id);
    res.status(200).json(review);
  }
  async getProductById(req, res, next) {
    try {
      const product = await _product.default.getProductById(req.query.product_id);
      return res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
  async getTopPicks(req, res, next) {
    try {
      var _req$query;
      const topPicks = await _product.default.getTopPicks((_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.limit);
      return res.status(200).json(topPicks);
    } catch (err) {
      next(err);
    }
  }
  async getProductSeller(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await _authentication.default.verifyToken(token);
      if (decoded.id) {
        const products = await _product.default.getProductSellerid(decoded.id);
        return res.status(200).json(products);
      } else {
        res.status(401).json({
          message: "Unauthorized"
        });
      }
    } catch (err) {
      next(err);
    }
  }
  async atlasSearch(req, res, next) {
    const products = await _product.default.searchProduct(req.query.query);
    return res.status(200).json(products);
  }
}
exports.Controller = Controller;
var _default = new Controller();
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiYWRkUHJvZHVjdCIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJkZWNvZGVkIiwiYXV0aGVudGljYXRpb25TZXJ2aWNlIiwidmVyaWZ5VG9rZW4iLCJpZCIsInByb2R1Y3QiLCJwcm9kdWN0U2VydmljZSIsImNyZWF0ZVByb2R1Y3QiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIl9pZCIsIm1lc3NhZ2UiLCJlcnIiLCJhZGRSZXZpZXciLCJyZXZpZXciLCJnZXRSZXZpZXciLCJnZXRQcm9kdWN0QnlJZCIsInF1ZXJ5IiwicHJvZHVjdF9pZCIsImdldFRvcFBpY2tzIiwidG9wUGlja3MiLCJsaW1pdCIsImdldFByb2R1Y3RTZWxsZXIiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RTZWxsZXJpZCIsImF0bGFzU2VhcmNoIiwic2VhcmNoUHJvZHVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvcHJvZHVjdC9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0U2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XG5pbXBvcnQgYXV0aGVudGljYXRpb25TZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzeW5jIGFkZFByb2R1Y3QocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgaWYgKGRlY29kZWQuaWQpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmNyZWF0ZVByb2R1Y3QoXG4gICAgICAgICAgZGVjb2RlZC5pZCxcbiAgICAgICAgICByZXEuYm9keVxuICAgICAgICApO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0Ll9pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGFkZFJldmlldyhyZXEsIHJlcywgbmV4dCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGF1dGhlbnRpY2F0aW9uU2VydmljZS52ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgICBpZiAoZGVjb2RlZC5pZCkge1xuICAgICAgICBjb25zdCByZXZpZXcgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5hZGRSZXZpZXcoZGVjb2RlZC5pZCwgcmVxLmJvZHkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXZpZXcuX2lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0UmV2aWV3KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc3QgcmV2aWV3ID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0UmV2aWV3KGRlY29kZWQuaWQpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJldmlldyk7XG4gIH1cbiAgYXN5bmMgZ2V0UHJvZHVjdEJ5SWQocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHJlcS5xdWVyeS5wcm9kdWN0X2lkKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0VG9wUGlja3MocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9wUGlja3MgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRUb3BQaWNrcyhyZXEucXVlcnk/LmxpbWl0KTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0b3BQaWNrcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGdldFByb2R1Y3RTZWxsZXIocmVxLCByZXMsIG5leHQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBhdXRoZW50aWNhdGlvblNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4pO1xuICAgICAgaWYgKGRlY29kZWQuaWQpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0U2VsbGVyaWQoZGVjb2RlZC5pZCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9XG4gIGFzeW5jIGF0bGFzU2VhcmNoKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5zZWFyY2hQcm9kdWN0KHJlcS5xdWVyeS5xdWVyeSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUEwRTtBQUNuRSxNQUFNQSxVQUFVLENBQUM7RUFDdEIsTUFBTUMsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO0lBQy9CLElBQUk7TUFDRixNQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxhQUFhLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDckQsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLHVCQUFxQixDQUFDQyxXQUFXLENBQUNOLEtBQUssQ0FBQztNQUM5RCxJQUFJSSxPQUFPLENBQUNHLEVBQUUsRUFBRTtRQUNkLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxnQkFBYyxDQUFDQyxhQUFhLENBQ2hETixPQUFPLENBQUNHLEVBQUUsRUFDVlYsR0FBRyxDQUFDYyxJQUFJLENBQ1Q7UUFDRGIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxHQUFHLENBQUM7TUFDbkMsQ0FBQyxNQUFNO1FBQ0xoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1VBQUVFLE9BQU8sRUFBRTtRQUFlLENBQUMsQ0FBQztNQUNuRDtJQUNGLENBQUMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7TUFDWmpCLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQztJQUNYO0VBQ0Y7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